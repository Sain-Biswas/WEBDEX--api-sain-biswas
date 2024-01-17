import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { Images } from '../../../../public/Images/exporter';
import { TypeIcons } from "../../../../public/TypeIcon/exporter";
import singlePokemonFetch from "../../Data/SinglePKMN";
import ButtonRoutes from './components/ButtonRoutes';

const SinglePokemon = async ({ params }) => {
    const id = params.id;
    const data = await singlePokemonFetch(id);
    const [c1, c2] = (data.types.length > 1) ? ([data.types[0].color, data.types[1].color]) : ([data.types[0].color, data.types[0].color])
    return (
        <div className='flex flex-col flex-wrap text-white sm:text-black font-sans align-middle justify-evenly' style={{ backgroundImage: `linear-gradient(to right, ${c1} 20%, ${c1} 40%,${c2} 75%)` }}>
            <div className='flex flex-row flex-wrap justify-evenly content-evenly pb-2 items-center'>
                <div className="w-80 h-80">
                    <Image className='rotate-45' src={Images.bgPokeball} width={1026} height={1026} alt="" />
                    <Image className="relative top-[-20rem]" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} width={1026} height={1026} alt={`${data.name}`} />
                </div>
                <div className='font-bold text-center flex flex-wrap flex-col justify-center'>
                    <p className="before:content-['#'] text-slate-300 text-5xl">{data.id}</p>
                    <p className="text-4xl">{data.name.toUpperCase()}</p>
                    <div className="flex justify-evenly flex-wrap">
                        {data.types.map((element) => (
                            <Link href={`/pokemon/type/${element.name}`} className="p-1 rounded-md m-1 h-10 flex align-bottom ring-1 ring-white sm:relative justify-center" style={{ backgroundColor: `${element.color}` }} key={element.name}>
                                <Image height={100} width={100} alt="" className="h-8 w-8" src={TypeIcons[`${element.name}`]} />
                                <p className="flex py-1">{element.name.toUpperCase()}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <ButtonRoutes data={data} />
        </div >
    )
}

export default SinglePokemon