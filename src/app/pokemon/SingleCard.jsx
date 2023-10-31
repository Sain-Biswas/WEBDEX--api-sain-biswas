import Image from "next/image";
import Link from "next/link";
import { TypeIcons } from "../../../public/TypeIcon/exporter";


const SingleCard = ({ id, name, types }) => {
    const [c1, c2] = (types.length > 1) ? ([types[0].color, types[1].color]) : ([types[0].color, "gray"])

    return (
        <div className="m-2 p-2 rounded-2xl flex justify-between align-middle text-white font-bold font-sans sm:flex-col sm:w-[19rem] sm:justify-evenly" style={{ backgroundImage: `linear-gradient(to right, ${c1} 20%, ${c1} 40%,${c2} 75%)` }} >
            <div className="flex flex-col justify-center pl-2">
                <p className="before:content-['#'] text-slate-600 text-3xl sm:h-[21rem] sm:text-7xl sm:text-center"> {id} </p>
                <div className="sm:flex-col">
                    <p className="text-3xl sm:text-center sm:text-">{name.toUpperCase()}</p>
                    <div className="flex flex-wrap justify-evenly">
                        {types.map((element) => (
                            <Link href={`/pokemon/type/${element.name}`} className="p-1 rounded-md m-1 h-10 flex align-bottom ring-1 ring-white sm:relative justify-center" style={{ backgroundColor: `${element.color}` }} key={element.name}>
                                <Image height={100} width={100} alt="" className="h-8 w-8" src={TypeIcons[`${element.name}`]} />
                                <p className="flex py-1">{element.name.toUpperCase()}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Link href={`/pokemon/${id}`} className="h-72 w-72 inline-block sm:relative sm:top-[-24rem] sm:h-0">
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} width={475} height={475} alt={`${name}`} className="" />
            </Link >
        </div>
    )
}

export default SingleCard