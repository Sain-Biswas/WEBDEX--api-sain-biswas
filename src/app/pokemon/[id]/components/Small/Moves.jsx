import Image from "next/image";
import Link from "next/link";
import { TypeIcons } from "../../../../../../public/TypeIcon/exporter";


const Moves = ({ data }) => {
    return (
        <div
            className="bg-white rounded-t-xl p-2 flex flex-wrap gap-2 text-white justify-stretch"
        >
            {data.moves.map((move) => (
                <Link
                    href={`/moves/${move.id}`}
                    key={move.id}
                    className="rounded-lg flex-grow"
                >
                    <div
                        className="rounded-lg p-2 flex justify-center bg-dotted"
                        style={{ backgroundColor: move.type.color, minWidth: '10rem' }}
                    >
                        <div
                            className="w-full pokeball-move"
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
                </Link>
            ))}
        </div>
    )
}

export default Moves