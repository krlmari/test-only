import Link from "next/link";

const Nav = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="menu-burger"></div>
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
            </div>
        </>
    );
};

export default Nav;
