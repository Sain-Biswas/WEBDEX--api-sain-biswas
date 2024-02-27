import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../../resources/components/ui/tabs";
import BasicDetails from "./BasicDetails";
import EvolutionForms from "./EvolutionForms";
import Moves from "./Moves";

const ButtonRoutes = ({ data, c1, c2 }) => {

    return (
        <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid bg-purple-300 grid-cols-3 mx-2">
                <TabsTrigger value="basics" className="data-[state=active]:bg-purple-700 text-white font-extrabold data-[state=active]:text-white">Basics</TabsTrigger>
                <TabsTrigger value="evolution" className="data-[state=active]:bg-purple-700 text-white font-extrabold data-[state=active]:text-white">Evolution & Forms</TabsTrigger>
                <TabsTrigger value="moves" className="data-[state=active]:bg-purple-700 text-white font-extrabold data-[state=active]:text-white">Moves</TabsTrigger>
            </TabsList>
            <TabsContent value="basics">
                <BasicDetails data={data} c1={c1} c2={c2} />
            </TabsContent>
            <TabsContent value="evolution">
                <EvolutionForms data={data} />
            </TabsContent>
            <TabsContent value="moves">
                <Moves data={data} />
            </TabsContent>
        </Tabs>
    )
}

{/* <ButtonGroup
                fullWidth
                size="sm"
                radius="sm"
                className="px-2"
            >
                <Button
                    onClick={() => setRoute('basic')}
                    className="flex-grow text-lg font-extrabold text-white"
                    color="secondary"
                    variant={`${(route === 'basic') ? 'solid' : 'light'}`}
                >Basics</Button>
                <Button
                    onClick={() => setRoute('moves')}
                    className="flex-grow text-lg font-extrabold text-white"
                    color="secondary"
                    variant={`${(route === 'moves') ? 'solid' : 'light'}`}
                >Moves</Button>
                <Button
                    onClick={() => setRoute('evo')}
                    className="flex-grow text-lg font-extrabold text-white"
                    color="secondary"
                    variant={`${(route === 'evo') ? 'solid' : 'light'}`}
                >Evolution</Button>
            </ButtonGroup>
            <div className="sticky">
                {(route == 'basic') && <BasicDetails data={data} />}
                {(route == 'evo') && <EvolutionForms data={data} />}
                {(route == 'moves') && <Moves data={data} />}
            </div> */}

export default ButtonRoutes