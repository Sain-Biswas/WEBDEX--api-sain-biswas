import Image from "next/image"


const EvolutionForms = ({ data }) => {
    const [c1, c2] = (data.types.length > 1) ? ([data.types[0].color, data.types[1].color]) : ([data.types[0].color, data.types[0].color])

    return (
        <div
            className="bg-white rounded-t-xl text-black p-2 flex flex-col gap-2"
        >
            <p className="text-center font-bold text-3xl italic text-purple-700">All Evolution forms</p>
            {
                data.evolutionChain.map((pokemon) => (
                    <div
                        key={pokemon.id}
                        style={{
                            background: `linear-gradient(-45deg, ${c1} 20%, ${c1} 40%, ${c2} 60%,${c2} 75%)`,
                            backgroundSize: '400%',
                        }}
                        className="p-2 flex rounded-xl animate-gradient"
                    >
                        <div
                            className="h-60 w-60"
                        >
                            <Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                                alt=""
                                height={2046}
                                width={2046}
                            />
                        </div>
                        <div
                            className=""
                        >
                            <p className="before:content-['#'] text-2xl">{pokemon.id}</p>
                            <p className="">{pokemon.name}</p>
                        </div>
                    </div>
                ))
            }
            <p className="text-center font-bold text-3xl italic text-purple-700">All Forms of Pokemon</p>
            {
                data.varieties.map((pokemon) => (
                    <div
                        key={pokemon.varid}
                        className=""
                    >
                        <div>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.varid}.png`} className="" alt="" />
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default EvolutionForms