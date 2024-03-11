import { getProducts, getProductsByRange, getProductById } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range');
    const id= searchParams.get('id');

    if(range) {
        let products = await getProductsByRange(range);
        return NextResponse.json(products);
    }

    if(id) {
        let product = await getProductById(id);
        return NextResponse.json(product);
    }


    let products = await getProducts();
    return NextResponse.json(products);


}
