import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { useState } from "react";

import { Container } from "../styles/Container.styled";
import {
    StyledHeader,
    HeaderDescription,
    HeaderContainer,
    HeaderCompany,
    HeaderPosition,
    HeaderImage,
} from "../styles/Header.styled";
import { Logo } from "../styles/Logo.styled";

import MenuBurger from "./MenuBurger";

import { BurgerStyled } from "../styles/MenuBurger.styled";

const Header = () => {
    const [menuBurgerActive, setMenuBurgerActive] = useState(false);

    const items = [
        { value: "Компания", href: "/company" },
        { value: "Продукты и услуги", href: "/products-and-services" },
        { value: "Проекты", href: "/projects" },
        { value: "Новости", href: "/news" },
        { value: "Контакты", href: "/contacts" },
    ];

    return (
        <>
            <StyledHeader>
                <Container>
                    <HeaderContainer>
                        <HeaderCompany>
                            <Logo></Logo>
                            <Link href="/">
                                <a>ПензГидроМаш</a>
                            </Link>
                        </HeaderCompany>

                        <BurgerStyled
                            onClick={() =>
                                setMenuBurgerActive(!menuBurgerActive)
                            }
                        ></BurgerStyled>
                        <MenuBurger
                            items={items}
                            menuActive={menuBurgerActive}
                            setActive={setMenuBurgerActive}
                        ></MenuBurger>

                        <Nav items={items} />
                    </HeaderContainer>
                </Container>

                <Container>
                    <HeaderPosition>
                        <Link href="/">
                            <a>Главная</a>
                        </Link>
                        <p> &nbsp;&nbsp; </p>
                        <Image
                            src="/arrow.svg"
                            alt="ПензГидроМаш picture"
                            width={7}
                            height={12}
                        />
                        <p> &nbsp;&nbsp; </p>
                        <Link href="/contacts">
                            <a>Контакты</a>
                        </Link>
                    </HeaderPosition>
                    <h1>Компания</h1>
                </Container>

                <hr />

                <Container>
                    <HeaderDescription>
                        Основная сфера деятельности «ПензГидромаш» — <br />
                        создание систем для нефтяной, газовой, химической <br />{" "}
                        и нефтехимической сфер промышленности.
                    </HeaderDescription>
                </Container>
                <HeaderImage></HeaderImage>
            </StyledHeader>
        </>
    );
};

export default Header;