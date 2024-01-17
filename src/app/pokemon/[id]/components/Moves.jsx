import Image from "next/image";
import { TypeIcons } from "../../../../../public/TypeIcon/exporter";


const Moves = ({ data }) => {
    return (
        <div
            className="bg-white rounded-t-xl p-2 flex flex-wrap gap-2 text-white justify-stretch"
        >
            {data.moves.map((move) => (
                <div
                    key={move.id}
                    className="rounded-lg p-2 flex-grow flex justify-center"
                    style={{ backgroundColor: move.type.color, minWidth: '10rem' }}
                >
                    <div
                        className="w-full"
                    >
                        <div
                            className="flex justify-between w-full"
                        >
                            <p className="before:content-['#'] font-extrabold text-lg">{move.id}</p>
                            <Image src={TypeIcons[move.type.name]} alt="" width={256} height={256} className="w-8 h-8" />
                        </div>
                        <p className=" font-extrabold text-center text-2xl font-serif">{move.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Moves