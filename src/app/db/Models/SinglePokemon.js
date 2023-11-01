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
        },
        habitat: {
            type: String
        },
        color: {
            type: String
        },
        shape: {
            type: String
        },
        genderRate: {
            type: Number
        },
        canSwitchForm: {
            type: Boolean
        },
        isGenderDiff: {
            type: Boolean
        },
        canDoMegaEvolution: {
            type: Boolean
        },
        canGMax: {
            type: Boolean
        },
        evolutionChain: {
            type: Array
        },
        abilities: {
            type: Array
        },
        hidAbilities: {
            type: Array
        },
        baseStats: {
            type: Array
        },
        varieties: {
            type: Array
        },
        height: {
            type: Number
        },
        mythical: {
            type: Boolean
        },
        legendary: {
            type: Boolean
        },
        eggGroups: {
            type: Array
        },
        happiness: {
            type: Number
        },
        captureRate: {
            type: Number
        },
        genus: {
            type: Array
        },
        flavourText: {
            type: Array
        },
        moves: {
            type: Array
        }
    }
);

export default mongoose.models.SinglePokemon || mongoose.model("SinglePokemon", PokemonListSchema, "SinglePokemon");