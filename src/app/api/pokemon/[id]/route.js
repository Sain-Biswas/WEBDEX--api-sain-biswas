import { NextResponse } from "next/server";
import singlePokemonFetch from "../../../Data/SinglePKMN";

export async function GET(request) {
    const id = request.url.split("pokemon/")[1];
    const data = await singlePokemonFetch(id);
    return NextResponse.json(data);
}