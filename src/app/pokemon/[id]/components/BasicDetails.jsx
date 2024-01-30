import Image from "next/image";
import Category from "../../../../../public/Icon/category.png";
import Details from "../../../../../public/Icon/information.png";
import Length from "../../../../../public/Icon/length.png";
import Weight from "../../../../../public/Icon/weight.png";

import { ScrollArea } from "../../../resources/components/ui/scroll-area";
import { Separator } from "../../../resources/components/ui/separator";


// const

const BasicDetails = ({ data }) => {
    console.log(data);
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
                        <p className="">Weight</p>
                        <p className="">{data.weigth}</p>
                    </div>
                    <div className="flex flex-grow border-x-2 border-slate-600 flex-col items-center">
                        <Image src={Length} alt="" className="h-10 w-10" />
                        <p className="">Length</p>
                        <div className="">{data.heigth}</div>
                    </div>
                    <div className="flex flex-grow flex-col items-center">
                        <Image src={Category} alt="" className="h-10 w-10" />
                        <p className="">Category</p>
                        <p className="">{data.genus.map((g, i) => (<p key={i}>{g}</p>))}</p>
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

            </div>
        </div>
    )
}

export default BasicDetails