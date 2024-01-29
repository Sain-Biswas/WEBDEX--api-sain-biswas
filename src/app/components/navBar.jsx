"use client"

import Link from "next/link";
import React from 'react';

import pokeapi from './pokeapiLogo.png';
import pokemon from './pokemonLogo.png';
import logo from './webdexLogo.png';

import SearchIcon from '../resources/icons/SearchIcon';

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../resources/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "../resources/components/ui/dropdown-menu";
import { Input } from "../resources/components/ui/input";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../resources/components/ui/navigation-menu";


export default function NavigationMenuDemo() {
    const router = useRouter();

    function Search(e) {
        e.preventDefault();
        let value = e.target[0].value

        router.push(`/pokemon/${value}`);
        value = ""
    }

    return (
        <div className="w-full p-2 flex items-center justify-between border-b-2">
            <div className="flex items-center">
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <HamburgerMenuIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuGroup>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            <div
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                                            >
                                                <Image src={pokemon} alt="" width={2000} height={736} className="h-10 w-full" />
                                                <div className="text-lg text-center font-mono font-bold">
                                                    Pokemon
                                                </div>
                                            </div>
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>
                                                    <Button variant="ghost" className='w-full'>
                                                        <Link href="/pokemon" className="w-full">
                                                            Pokemons
                                                        </Link>
                                                    </Button>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Button variant="ghost" className='w-full'>
                                                        <Link href="/pokemon/moves" className="w-full">
                                                            Moves
                                                        </Link>
                                                    </Button>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Button variant="ghost" className='w-full'>
                                                        <Link href="/pokemon/type" className="w-full">
                                                            Types
                                                        </Link>
                                                    </Button>
                                                </DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                </DropdownMenuGroup>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <div
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                                        >
                                            <Image src={pokeapi} alt="" width={2000} height={736} className="h-10 w-full" />
                                            <div className="text-lg text-center font-mono font-bold">
                                                Pokemon API
                                            </div>
                                        </div>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                <Button variant="ghost" className='w-full'>
                                                    <Link href="/docs/pokemon" className="w-full">
                                                        Pokemons
                                                    </Link>
                                                </Button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Button variant="ghost" className='w-full'>
                                                    <Link href="/docs/moves" className="w-full">
                                                        Moves
                                                    </Link>
                                                </Button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Button variant="ghost" className='w-full'>
                                                    <Link href="/docs/type" className="w-full">
                                                        Types
                                                    </Link>
                                                </Button>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Button variant="ghost" className='w-full'>
                                    <Link href="/about" className="w-full">
                                        About
                                    </Link>
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <Link href="/" className="flex items-center pl-2 md:pl-0">
                    <Image
                        src={logo}
                        alt=""
                        width={1024}
                        height={1024}
                        className="block h-10 w-10"
                    />
                    <p className="pl-2 text-2xl font-bold">WebDex</p>
                </Link>
            </div>

            <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Pokemon</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <div
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        >
                                            <Image src={pokemon} alt="" width={2000} height={736} className="h-10 w-full" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Pokemon
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Welcome to WebDex. The all in one Online Pokedex.
                                            </p>
                                        </div>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/pokemon" title="Pokemons">
                                    Learn and discover all about the monsters of the PokeWorld.
                                </ListItem>
                                <ListItem href="/pokemon/moves" title="Moves">
                                    Learn and discover all about the Moves of the PokeWorld Monsters.
                                </ListItem>
                                <ListItem href="/pokemon/type" title="Types">
                                    Learn and discover all about the different types of monsters in the PokeWorld.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>PokeAPI</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <div
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        >
                                            <Image src={pokeapi} alt="" width={2000} height={736} className="h-10 w-full" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Pokemon API
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed Application Programming Interface &#40;API&#41; to get all information about pokemons in one place.
                                            </p>
                                        </div>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs/pokemon" title="Pokemons">
                                    Guide to access the information of all pokemons at one place.
                                </ListItem>
                                <ListItem href="/docs/moves" title="Moves">
                                    Guide to access information about all the moves pokemons can use.
                                </ListItem>
                                <ListItem href="/docs/types" title="Types">
                                    Guide to access information about pokemon types in the pokemon world.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <form onSubmit={Search} className="flex gap-1">
                <Input placeholder="Search" type="text" className="w-40" />
                <Button size="icon">
                    <SearchIcon />
                </Button>
            </form>
        </div>
    )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={
                        `block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
