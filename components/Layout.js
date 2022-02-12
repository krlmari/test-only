import Head from "next/head";
import Header from "./Header";

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

            {children}
        </>
    );
};

export default Layout;
