import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";
import theme from "../styles/theme";

const Company = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout title="Компания" />
        </ThemeProvider>
    );
};

export default Company;
