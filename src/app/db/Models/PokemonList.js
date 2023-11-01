import mongoose from "mongoose";

const PokemonListSchema = new mongoose.Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        types: {
            type: Array
        }
    }
);

export default mongoose.models.PokemonList || mongoose.model("PokemonList", PokemonListSchema, "PokemonList");