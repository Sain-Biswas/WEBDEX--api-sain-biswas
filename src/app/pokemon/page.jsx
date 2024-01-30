import { Suspense } from "react";
import pokemonListFetch from "../resources/Data/PKMNList";
import SingleCard from "./components/SingleCard";

const Pokemon = async () => {
    const pokemonData = await pokemonListFetch();

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="sm:flex sm:flex-wrap sm:justify-evenly bg-pdiv">
                    {pokemonData.map(element => < SingleCard key={element.id} id={element.id} name={element.name} types={element.types} />)}
                </div>
            </Suspense>
        </>
    )
}

export default Pokemon