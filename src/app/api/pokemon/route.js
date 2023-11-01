import pokemonListFetch from "@/app/Data/PKMNList";
import { NextResponse } from "next/server";

export async function GET(request) {
    const data = await pokemonListFetch();
    return NextResponse.json(data);
}