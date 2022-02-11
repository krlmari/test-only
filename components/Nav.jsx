import React from "react";
import Link from "next/link";
import { NavBar } from "../styles/Nav.styled";

const Nav = ({ items }) => {
    return (
        <>
            <NavBar>
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item}>
                                <Link href={item.href}>
                                    <a>{item.value}</a>
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
