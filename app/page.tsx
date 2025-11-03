import type { ProductItem} from "@/utils/types/type"
import {  SearchFilterWrapper } from "@/components/search-filter-wrapper"
import { decryptData } from "@/lib/encryption";
import { PASSWORD, SHORTCUTS } from "@/lib/contants";
import { ShortcutCard } from "@/components/shortcut-card";
import ShortcutHeader from "@/components/short-header";
import DashboardHeader from "@/components/header";
import ShortcutGrid from "@/components/shortcut-grid";
export const dynamic = "force-dynamic";
async function decryptAllProducts(encryptedProducts:ProductItem[]) {
  const decryptedProducts = encryptedProducts.map(prod => {
    const decryptedDetails = decryptData(PASSWORD,prod.details);
    return {
      ...prod,
      details: decryptedDetails
    };
  });
  return decryptedProducts;
}

async function getProductData(): Promise<ProductItem[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    })
    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    const responseData = await response.json()
    const products =  decryptAllProducts(responseData.data);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export default  async function Home() {
   const products = await getProductData()
  return (
    <main className="min-h-screen bg-background">
      <div className="relative overflow-hidden border-b border-border/40 bg-linear-to-br from-card via-card to-background/60">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/4 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <DashboardHeader/>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <ShortcutHeader/>
        <ShortcutGrid/>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <SearchFilterWrapper items={products} />
      </div>

      <div className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center text-sm text-muted-foreground">
          <p className="font-medium">Trusted by leading enterprises worldwide</p>
        </div>
      </div>
    </main>
  )
}

