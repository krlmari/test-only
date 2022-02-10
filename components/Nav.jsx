import Link from "next/link";
import { NavBar } from "../styles/Nav.styled";
import { MenuBurger } from "../styles/MenuBurger.styled";

const Nav = () => {
    return (
        <>
            <NavBar>
                <MenuBurger></MenuBurger>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Компания</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products-and-services">
                            <a>Продукты и услуги</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a>Проекты</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>Новости</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <a>Контакты</a>
                        </Link>
                    </li>
                </ul>
            </NavBar>
        </>
    );
};

export default Nav;
