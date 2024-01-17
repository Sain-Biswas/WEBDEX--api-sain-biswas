'use client';
import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import img from './webdexLogo.png';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const router = useRouter();
    const searchRef = useRef("");

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src={img} alt='' width={44} height={44} />
                    <p className="font-bold text-2xl p-2">WebDex</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className="text-slate-500 hover:text-purple-600 hover:font-bold" href="/pokemon">
                        Pokemon
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-slate-500 hover:text-purple-600 hover:font-bold" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-slate-500 hover:text-purple-600 hover:font-bold" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <Input
                    classNames={{
                        base: "h-10",
                        mainWrapper: "h-full w-44",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Enter Pokemon Id"
                    size="sm"
                    ref={searchRef}
                    endContent={
                        <button
                            onClick={() => {
                                router.push(`/pokemon/${searchRef.current.value}`)
                            }}
                        >
                            <svg
                                aria-hidden="true"
                                fill="none"
                                focusable="false"
                                height='18'
                                role="presentation"
                                viewBox="0 0 24 24"
                                width='18'
                            >
                                <path
                                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                />
                                <path
                                    d="M22 22L20 20"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                />
                            </svg>
                        </button>
                    }
                    type="search"
                />
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem key={`pokemon`}>
                    <Link className="text-slate-500 hover:text-purple-600 hover:font-bold w-full" href="/pokemon" size="lg">
                        Pokemon
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
