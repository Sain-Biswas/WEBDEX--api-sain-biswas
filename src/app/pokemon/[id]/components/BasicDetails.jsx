import { ScrollArea } from "../../../resources/components/ui/scroll-area";


// const

const BasicDetails = ({ data }) => {
    return (
        <div
            className="bg-white flex gap-2 justify-around flex-wrap rounded-t-xl text-black p-2 lg:bg-black"
        >
            <div
                className="flex-grow ring-1"
            >
                <div className="">

                </div>
                <div>
                    <p className="text-xl text-purple-700"></p>
                    <ScrollArea className="">

                    </ScrollArea>
                </div>

            </div>
            <div
                className="flex-grow ring-1"
            >

            </div>
        </div>
    )
}

export default BasicDetails