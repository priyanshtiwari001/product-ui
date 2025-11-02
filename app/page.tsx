import type { ProductItem} from "@/utils/types/type"
import {  SearchFilterWrapper } from "@/components/search-filter-wrapper"
import { decryptData } from "@/lib/encryption";
import { PASSWORD } from "@/lib/contants";

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
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
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

export default async function Home() {
  const products = await getProductData()

  return (
    <main className="min-h-screen bg-backgound">
      <div className="bg-card border-b border-border py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-card-foreground mb-2">B2B Product Catalog</h1>
          <p className="text-muted-foreground">
            Enterprise solutions with secure encrypted delivery and server-side decryption
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found</p>
          </div>
        ) : (
          <SearchFilterWrapper items={products} />
        )}
      </div>
    </main>
  )
}
