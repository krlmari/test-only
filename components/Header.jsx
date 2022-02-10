import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

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

const Header = () => {
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
                        <Nav />
                    </HeaderContainer>
                </Container>

                <Container>
                    <HeaderPosition>
                        <p>Главная &nbsp;</p>
                        <Image
                            src="/arrow.svg"
                            alt="ПензГидроМаш picture"
                            width={7}
                            height={12}
                        />
                        <p>&nbsp; Контакты</p>
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
