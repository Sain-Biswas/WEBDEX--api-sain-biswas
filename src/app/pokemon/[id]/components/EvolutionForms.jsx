

const EvolutionForms = ({ data }) => {
    return (
        <div
            className="bg-white rounded-t-xl text-black p-2"
        >
            <p className="">All Evolution forms</p>
            {
                data.evolutionChain.map((pokemon) => (
                    <div
                        key={pokemon.id}

                    >
                        <p className="">{pokemon.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default EvolutionForms