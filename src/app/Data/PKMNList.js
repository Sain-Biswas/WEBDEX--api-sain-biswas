import connectMongoDB from "../db/connection";
import PokemonList from "../db/Models/PokemonList";

const pokemonListFetch = async () => {
    if (!global._connectionStatus) {
        await connectMongoDB();
    }
    const data = await PokemonList.find({});
    return data;
}

export default pokemonListFetch;