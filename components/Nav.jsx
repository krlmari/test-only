import React from "react";
import Link from "next/link";
import { NavBar } from "../styles/Nav.styled";
import { useRouter } from "next/router";
import { NoActiveLink } from "../styles/NoActiveLink";

const Nav = ({ items }) => {
    const router = useRouter();

    return (
        <>
            <NavBar>
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item}>
                                <Link href={item.href} passHref>
                                    {router.pathname === item.href ? (
                                        <a>{item.value}</a>
                                    ) : (
                                        <NoActiveLink>
                                            {item.value}
                                        </NoActiveLink>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </NavBar>
        </>
    );
};

export default Nav;
