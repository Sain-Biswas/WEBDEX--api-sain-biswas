import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { TypeIcons } from "../../../../public/TypeIcon/exporter";
import singlePokemonFetch from "../../resources/Data/SinglePKMN";

import TopEnd from './components/Large/TopEnd';
import TopMiddle from './components/Large/TopMiddle';
import TopStart from './components/Large/TopStart';
import ButtonRoutes from './components/Small/ButtonRoutes';

const SinglePokemon = async ({ params }) => {
    const id = params.id;
    const data = await singlePokemonFetch(id);
    data._id = data._id.toString();
    const [c1, c2] = (data.types.length > 1) ? ([data.types[0].color, data.types[1].color]) : ([data.types[0].color, "#334155"])

    return (
        <>
            <main className='flex flex-col lg:hidden flex-wrap text-white font-sans animate-gradient align-middle justify-evenly' style={{ backgroundImage: `linear-gradient(45deg, ${c1} 50%,${c2} 50%)`, backgroundSize: '400%', backgroundAttachment: 'fixed' }}>
                <div
                    className="font-rubikburned leading-[8rem] absolute top-12 z-0 break-all w-full text-center text-[8rem]"
                >
                    {data.name.toUpperCase()}
                </div>
                <div className='flex flex-row flex-wrap z-40 justify-evenly content-evenly pb-2 items-center'>
                    <div className="w-80 h-80">
                        <Image className="" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} width={1026} height={1026} alt={`${data.name}`} />
                    </div>
                    <div className='font-bold text-center flex flex-wrap flex-col justify-center'>
                        <p className="before:content-['#'] text-slate-800 text-5xl text-shadow-white">{data.id}</p>
                        <p className="text-4xl text-shadow-black">{data.name.toUpperCase()}</p>
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
                <div className="z-40">
                    <ButtonRoutes data={data} c1={c1} c2={c2} />
                </div>
            </main>

            <main className="hidden lg:block">
                <div className="grid grid-cols-3">
                    <div className="ring-1">
                        <TopStart data={data} />
                    </div>
                    <div className="ring-1">
                        <TopMiddle data={data} />
                    </div>
                    <div className="ring-1">
                        <TopEnd data={data} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default SinglePokemon