import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ title, description = "", children }) => {
    return (
        <>
            <Head>
                <title>ПензГидроМаш</title>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content={description || "Тестовое задание only"}
                />
                <meta
                    property="og:description"
                    content={description || "Тестовое задание only"}
                />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <header className="header ">
                <div className="header-container container">
                    <div className="header__company">
                        <Image
                            src="/logo.svg"
                            alt="ПензГидроМаш picture"
                            width={39}
                            height={38}
                        />
                        <Link href="/">
                            <a className="header__logo-name-company">
                                ПензГидроМаш
                            </a>
                        </Link>
                    </div>

                    <div className="nav-bar">
                        <ul className="nav-links">
                            <li>
                                <Link href="/">
                                    <a>Компания</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Продукты и услуги</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Проекты</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Новости</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Контакты</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="header__position container">
                    <p>Главная &nbsp;</p>
                    <Image
                        src="/arrow.svg"
                        alt="ПензГидроМаш picture"
                        width={7}
                        height={12}
                    />
                    <p>&nbsp; Контакты</p>
                </div>
                <h1 className="container header__title">Компания</h1>
                <hr className="header__hr" />
                <p className="container header__description">
                    Основная сфера деятельности «ПензГидромаш» — <br />
                    создание систем для нефтяной, газовой, химической <br /> и
                    нефтехимической сфер промышленности.
                </p>
            </header>

            <div className="">{children}</div>
        </>
    );
};

export default Layout;
