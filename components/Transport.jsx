import Slider from "./Slider";
import { Container } from "../styles/Container.styled";
import {
    TransportStyled,
    TransportContent,
    TransportNumberOfCard,
    TransportCards,
    TransportCardImage,
    TransportCardItem,
} from "../styles/Transport.styled";

const Transport = () => {
    return (
        <>
            <TransportStyled>
                <Container>
                    <h2>Транспорт</h2>
                </Container>
                <TransportContent>
                    <Container>
                        <TransportNumberOfCard>01/02</TransportNumberOfCard>
                    </Container>
                    <div>
                        <TransportCardImage></TransportCardImage>
                    </div>
                    <TransportCards>
                        <TransportCardItem>
                            <div>
                                <h3>Автотранспорт</h3>
                                <p>
                                    — Собственная автотранспортная компания
                                    <br />
                                    — Перевозка негабаритных и тяжеловесных
                                    грузов
                                    <br />
                                    — Доставка в любую точку России
                                    <br />
                                </p>
                            </div>
                        </TransportCardItem>
                        <TransportCardItem>
                            <div>
                                <h3>Железнодорожный транспорт</h3>
                                <p>
                                    На заводе имеется ж/д ветка, заходящая в
                                    производственное здание
                                </p>
                            </div>
                        </TransportCardItem>
                    </TransportCards>
                </TransportContent>
            </TransportStyled>
        </>
    );
};

export default Transport;
