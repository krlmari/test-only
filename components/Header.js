import Link from "next/link";
import Nav from "./Nav";
import { useState } from "react";

import { Container } from "../styles/Container.styled";
import { HeaderContainer, HeaderCompany } from "../styles/Header.styled";
import { Logo } from "../styles/Logo.styled";

import MenuBurger from "./MenuBurger";

import { BurgerStyled } from "../styles/MenuBurger.styled";

const Header = () => {
    const [menuBurgerActive, setMenuBurgerActive] = useState(false);

    const items = [
        { value: "Компания", href: "/" },
        { value: "Продукты и услуги", href: "/products-and-services" },
        { value: "Проекты", href: "/projects" },
        { value: "Новости", href: "/news" },
        { value: "Контакты", href: "/contacts" },
    ];

    return (
        <>
            <Container>
                <HeaderContainer>
                    <HeaderCompany>
                        <Logo></Logo>
                        <Link href="/">
                            <a>ПензГидроМаш</a>
                        </Link>
                    </HeaderCompany>

                    <BurgerStyled
                        onClick={() => setMenuBurgerActive(!menuBurgerActive)}
                    ></BurgerStyled>
                    <MenuBurger
                        items={items}
                        menuActive={menuBurgerActive}
                        setActive={setMenuBurgerActive}
                    ></MenuBurger>

                    <Nav items={items} />
                </HeaderContainer>
            </Container>
        </>
    );
};

export default Header;
