import Link from "next/link";
import Image from "next/image";
import { Container } from "../styles/Container.styled";

import {
    CompanySecondLink,
    CompanyDescription,
    CompanyImage,
} from "../styles/CompanyMain.styled";
import Header from "./Header";

const CompanyMain = () => {
    return (
        <>
            <Header />
            <Container>
                <CompanySecondLink>
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
                </CompanySecondLink>
                <h1>Компания</h1>
            </Container>

            <hr />

            <Container>
                <CompanyDescription>
                    Основная сфера деятельности «ПензГидромаш» — <br />
                    создание систем для нефтяной, газовой, химической <br /> и
                    нефтехимической сфер промышленности.
                </CompanyDescription>
            </Container>
            <CompanyImage></CompanyImage>
        </>
    );
};

export default CompanyMain;
