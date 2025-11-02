import { SuccessResponse } from "@/utils/common/sucess-response";
import { Products } from "@/lib/mock-data";
import { ErrorResponse } from "@/utils/common/error-response";
import { NextResponse } from "next/server";
import { encryptData } from "@/lib/encryption";
import { PASSWORD } from "@/lib/contants";

export function GET(){
try {
  const encryptedProduct = Products.map(product =>{
    const encryptedDetails = encryptData(product.details,PASSWORD);
    return{
      ...product,
      details: encryptedDetails,
    }
  })
  SuccessResponse.data = encryptedProduct
  return NextResponse.json(SuccessResponse);
} catch (err) {
   ErrorResponse.error = err as Object;
    return NextResponse.json(ErrorResponse)
}
}