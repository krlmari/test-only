import Layout from "../components/Layout";
import CompanyMain from "../components/CompanyMain";
import { StyledHeader } from "../styles/Header.styled";
import About from "../components/About";
import Transport from "../components/Transport";

const Home = () => {
    return (
        <>
            <Layout title="Компания">
                <StyledHeader>
                    <CompanyMain />
                </StyledHeader>
                <About />
                <Transport />
            </Layout>
        </>
    );
};

export default Home;
