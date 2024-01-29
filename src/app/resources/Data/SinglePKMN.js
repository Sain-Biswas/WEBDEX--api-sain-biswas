import connectMongoDB from "../db/connection";
import SinglePokemon from "../db/Models/SinglePokemon";

const singlePokemonFetch = async (id) => {
    if (!global._connectionStatus) {
        await connectMongoDB();
    }
    const data = await SinglePokemon.where('id').equals(id);
    return data[0];
}

export default singlePokemonFetch;