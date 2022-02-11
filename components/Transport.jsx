import { Container } from "../styles/Container.styled";

import { TransportStyled, TransportContent } from "../styles/Transport.styled";

import TransportCardsDesktop from "./TransportCardsDesktop";
import TransportCardsSlider from "./TransportCardsSlider";
import { CardsSlider } from "../styles/TransportCardsSlider.styled";

import { TransportDesktop } from "../styles/TransportCardsDesktop";

const Transport = () => {
    return (
        <>
            <TransportStyled>
                <Container>
                    <h2>Транспорт</h2>
                </Container>
                <TransportContent>
                    <TransportDesktop>
                        <TransportCardsDesktop></TransportCardsDesktop>
                    </TransportDesktop>

                    <CardsSlider>
                        <TransportCardsSlider></TransportCardsSlider>
                    </CardsSlider>
                </TransportContent>
            </TransportStyled>
        </>
    );
};

export default Transport;
