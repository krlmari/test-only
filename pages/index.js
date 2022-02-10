import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";
import theme from "../styles/theme";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout title="Компания" />
        </ThemeProvider>
    );
}
