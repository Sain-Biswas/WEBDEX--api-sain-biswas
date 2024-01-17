import { NextResponse } from "next/server";
import pokemonListFetch from "../../Data/PKMNList";

export async function GET(request) {
    const data = await pokemonListFetch();
    return NextResponse.json(data);
}