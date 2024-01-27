'use client';

import { Button, ButtonGroup } from "@nextui-org/react";
import { useState } from "react";
import BasicDetails from "./BasicDetails";
import EvolutionForms from "./EvolutionForms";
import Moves from "./Moves";

const ButtonRoutes = ({ data }) => {
    const [route, setRoute] = useState('basic');

    return (
        <>
            <ButtonGroup
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
            </div>
        </>
    )
}

export default ButtonRoutes