import { Suspense } from "react";
import pokemonListFetch from "../Data/PKMNList";
import SingleCard from "./SingleCard";


const Pokemon = async () => {
    const pokemonData = await pokemonListFetch();
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="bg-pdiv sm:flex sm:flex-wrap sm:justify-evenly">
                    {pokemonData.map(element => < SingleCard key={element.id} id={element.id} name={element.name} types={element.types} />)}
                </div>
            </Suspense>
        </>
    )
}

export default Pokemon