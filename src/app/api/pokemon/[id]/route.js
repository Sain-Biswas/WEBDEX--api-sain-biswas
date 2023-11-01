import singlePokemonFetch from "@/app/Data/SinglePKMN";
import { NextResponse } from "next/server";

export async function GET(request) {
    const id = request.url.split("pokemon/")[1];
    const data = await singlePokemonFetch(id);
    return NextResponse.json(data);
}