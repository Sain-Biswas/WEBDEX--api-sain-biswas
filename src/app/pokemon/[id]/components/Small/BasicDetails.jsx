'use client';

import Image from "next/image";
import Category from "../../../../../../public/Icon/category.png";
import Details from "../../../../../../public/Icon/information.png";
import Length from "../../../../../../public/Icon/length.png";
import Stats from "../../../../../../public/Icon/stats.png";
import Weight from "../../../../../../public/Icon/weight.png";

import { Badge } from "../../../../resources/components/ui/badge";
import { Progress } from "../../../../resources/components/ui/progress";
import { ScrollArea } from "../../../../resources/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableRow,
} from "../../../../resources/components/ui/table";


const BasicDetails = ({ data, c1, c2 }) => {
    const Stat = data.baseStats.map((stat) => {
        const name = stat.name;
        const width = (stat.value / 255) * 100;
        const value = stat.value;
        return { name, width, value }
    });
    Stat.push({
        name: "Happiness",
        width: (data.happiness / 255) * 100,
        value: data.happiness,
    });
    console.log(Stat)
    const badgeData = [];
    if (data.canSwitchForm) badgeData.push('Switch Form');
    if (data.isGenderDiff) badgeData.push('Gender Difference');
    if (data.canDoMegaEvolution) badgeData.push('Mega Evolution');
    if (data.canGMax) badgeData.push('G Max');
    if (data.mythical) badgeData.push('Mythical');
    if (data.legendary) badgeData.push('Legendary');


    return (
        <div
            className="bg-white font-mono gap-2 grid grid-cols-1 sm:grid-cols-2 rounded-t-xl text-black p-2 lg:bg-black"
        >
            <div
                className="ring-1"
            >
                <div className="flex justify-around">
                    <div className="flex flex-grow flex-col items-center">
                        <Image src={Weight} alt="" className="h-10 w-10" />
                        <p className="font-semibold">Weight</p>
                        <p className="font-extrabold">{data.weigth}</p>
                    </div>
                    <div className="flex flex-grow border-x-2 border-slate-600 flex-col items-center">
                        <Image src={Length} alt="" className="h-10 w-10" />
                        <p className="font-semibold">Length</p>
                        <p className="font-extrabold">{data.height}</p>
                    </div>
                    <div className="flex flex-grow flex-col items-center">
                        <Image src={Category} alt="" className="h-10 w-10" />
                        <p className="font-semibold">Category</p>
                        <div className="font-extrabold">{data.genus.map((g, i) => (<p key={i}>{g}</p>))}</div>
                    </div>
                </div>
                <div className="p-3 flex justify-around flex-wrap gap-2">
                    {
                        badgeData.map((badge) => (<Badge key={badge} className="text-lg bg-gradient-to-r from-purple-500 to-pink-500" >{badge}</Badge>))
                    }
                </div>
                <div className="my-2">
                    <p className="text-2xl text-purple-700 font-extrabold">Abilities : </p>
                    <div className="flex flex-wrap justify-center gap-2 p-1">
                        {data.abilities.map((ability, index) => (
                            <div key={`${ability}-${index}`} className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-extrabold rounded-lg">
                                <span className="text-lg px-1">{ability}</span>
                            </div>
                        ))}
                        {data.hidAbilities.map((ability, index) => (
                            <div key={`${ability}-${index}`} className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-extrabold m-0 p-0 flex items-center rounded-lg">
                                <span className="text-lg px-1">{ability}</span>
                                <Badge className='h-full px-1 bg-gray-400'>Hidden</Badge>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-2xl text-purple-700 font-extrabold"> <Image src={Details} className="w-8 h-8 inline-block" alt="" /> Details</p>
                    <ScrollArea className="h-[250px] p-2 text-justify">
                        {
                            data.flavourText.map((info, index) => (<span key={index}>{info}</span>))
                        }
                    </ScrollArea>
                </div>

            </div>
            <div
                className="ring-1"
            >
                <div className="">
                    <p className="text-2xl text-purple-700 font-extrabold"> <Image src={Stats} className="w-8 h-8 inline-block" alt="" /> Base Stats</p>
                    <Table>
                        <TableCaption className="m-0">All values above are out of 255</TableCaption>
                        <TableBody>
                            {Stat.map((stat) => (
                                <TableRow key={stat.name} className="flex items-center">
                                    <TableCell className="w-[4.50rem] p-1">{stat.name}</TableCell>
                                    <TableCell className="flex-grow p-1">
                                        <Progress
                                            value={stat.width}
                                            classNameBar={`bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full w-full`}
                                        />
                                    </TableCell>
                                    <TableCell className="w-10 p-1">{stat.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="">
                    <p className="text-2xl  text-purple-700 font-extrabold mt-2 mb-1">Additional Information</p>
                    <div className="grid grid-cols-[30%_70%] gap-0">
                        <p className="border-2 mr-1 border-r-purple-700 border-transparent">Habitat</p>
                        <p className="">{data.habitat}</p>
                        <p className="border-2 mr-1 border-r-purple-700 border-transparent">Color</p>
                        <p>{data.color.charAt(0).toUpperCase()}{data.color.slice(1)}</p>
                        <p className="border-2 mr-1 border-r-purple-700 border-transparent">Shape</p>
                        <p>{data.shape}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicDetails