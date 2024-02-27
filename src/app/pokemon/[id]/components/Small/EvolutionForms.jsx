import Image from "next/image";
import Link from "next/link";
import { TypeIcons } from "../../../../../../public/TypeIcon/exporter";
import { Button } from "../../../../resources/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../../resources/components/ui/tabs";
import NormalIcon from '../../../../resources/icons/BlackStarIcon';
import ShinyIcon from '../../../../resources/icons/StarIcon';

const typesColor = {
    normal: "#949495",
    electric: "#f6d851",
    bug: "#9fa244",
    dark: "#212020",
    dragon: "#535ca8",
    fairy: "#dab4d4",
    fighting: "#730e0f",
    fire: "#e56c3e",
    flying: "#a2c3e7",
    ghost: "#684870",
    grass: "#66a945",
    ground: "#9c7743",
    ice: "#6dc8eb",
    poison: "#8f61bf",
    psychic: "#dd6b7b",
    rock: "#bfb889",
    steel: "#535252",
    water: "#5185c5",
}

const EvolutionForms = ({ data }) => {
    const [c1, c2] = (data.types.length > 1) ? ([data.types[0].color, data.types[1].color]) : ([data.types[0].color, "#334155"]);
    const varieties = data.varieties.map((pokemon) => {
        const name = pokemon.varname;
        const id = pokemon.varid;
        const types = pokemon.types.map((type) => {
            return ({
                name: type,
                color: typesColor[type]
            })
        })
        return ({
            id, name, types
        })
    })

    return (
        <div
            className="bg-white rounded-t-xl text-black p-2 flex flex-col gap-4"
        >
            <p className="text-center font-bold text-3xl italic text-purple-700">All Evolution forms</p>
            <div className=" flex gap-4 flex-wrap justify-center">
                {
                    data.evolutionChain.map((pokemon) => (
                        <div
                            key={pokemon.id}
                            style={{
                                backgroundImage: `linear-gradient(-45deg, ${c1} 20%, ${c1} 40%, ${c2} 60%,${c2} 75%)`,
                                backgroundSize: "400%",
                            }}
                            className="p-2 flex rounded-xl ring-4 ring-purple-700 flex-grow animate-gradient"
                        >
                            <Link href={`/pokemon/${pokemon.id}`}>
                                <div
                                    className="h-52 w-52"
                                >
                                    <Image
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                                        alt=""
                                        height={2046}
                                        width={2046}
                                        className="bg-minipokeball"
                                    />
                                </div>
                            </Link>
                            <div
                                className="flex flex-col flex-grow justify-center items-center font-extrabold"
                            >
                                <p className="before:content-['#'] text-4xl text-slate-500">{pokemon.id}</p>
                                <p className="text-2xl font-mono text-white">{pokemon.name}</p>
                                <p className="font-bold text-white text-xl">Level : {(pokemon.level[0]) ? pokemon.level[0] : "---"}</p>
                                <p className="font-bold text-white text-xl">Time : {(pokemon.time[0]) ? pokemon.time.join('/ ') : "Any"}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <p className="text-center font-bold text-3xl italic text-purple-700">All Forms of Pokemon</p>
            {
                (!varieties[0]) && <p className="text-center font-bold font-mono text-xl text-purple-700">No other forms available for this Pokemon</p>
            }
            <div className="flex flex-wrap justify-around gap-4">
                {
                    varieties.map((pokemon) => {
                        const [col1, col2] = (pokemon.types.length > 1) ? ([pokemon.types[0].color, pokemon.types[1].color]) : ([pokemon.types[0].color, '#334155']);
                        return (
                            <div
                                key={pokemon.id}
                                style={{
                                    background: `linear-gradient(-45deg, ${col1} 20%, ${col1} 40%, ${col2} 60%,${col2} 75%)`,
                                    backgroundSize: '400%',
                                }}
                                className="animate-gradient flex-grow ring-4 ring-purple-700 rounded-xl p-2 flex flex-col items-center"
                            >
                                <Tabs defaultValue="normal" className="flex flex-col items-center">
                                    <TabsList className="">
                                        <TabsTrigger value="normal">
                                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                                <NormalIcon />
                                            </Button>
                                        </TabsTrigger>
                                        <TabsTrigger value="shiny">
                                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                                <ShinyIcon />
                                            </Button>
                                        </TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="normal">
                                        <div className="h-80 w-80">
                                            <Image width={2046} height={2046} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} className="w-full h-full" alt="" />
                                        </div>
                                    </TabsContent >
                                    <TabsContent value="shiny">
                                        <div className="h-80 w-80">
                                            <Image width={2046} height={2046} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png`} className="w-full h-full text-lg font-mono flex justify-center items-center font-extrabold" alt="No Shiny Form for this Pokemon" />
                                        </div>
                                    </TabsContent>
                                </Tabs >
                                <div className="">
                                    <p className="font-mono font-extrabold text-3xl text-center text-white">{pokemon.name}</p>
                                    <div className="flex flex-wrap justify-evenly">
                                        {pokemon.types.map((element) => (
                                            <Link href={`/pokemon/type/${element.name}`} className="p-1 rounded-md m-1 h-10 flex align-bottom ring-1 ring-white sm:relative justify-center" style={{ backgroundColor: `${element.color}` }} key={element.name}>
                                                <Image height={100} width={100} alt="" className="h-8 w-8" src={TypeIcons[`${element.name}`]} />
                                                <p className="flex py-1 font-mono font-bold text-white">{element.name.toUpperCase()}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div >
                        )
                    })
                }
            </div>
        </div >
    )
}

export default EvolutionForms