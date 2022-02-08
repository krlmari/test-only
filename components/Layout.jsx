import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import About from "./About";
import Transport from "./Transport";

const Layout = ({ title, description = "", children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
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

            <header className="header">
                <div className="header-container container">
                    <div className="header__company">
                        <Image
                            src="/logo.svg"
                            alt="ПензГидроМаш picture"
                            width={39}
                            height={38}
                        />
                        <Link href="/">
                            <a>ПензГидроМаш</a>
                        </Link>
                    </div>
                    <Nav />
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
                <h1 className="container">Компания</h1>
                <hr />
                <p className="container header__description">
                    Основная сфера деятельности «ПензГидромаш» — <br />
                    создание систем для нефтяной, газовой, химической <br /> и
                    нефтехимической сфер промышленности.
                </p>
            </header>

            <About />
            <Transport />
        </>
    );
};

export default Layout;
