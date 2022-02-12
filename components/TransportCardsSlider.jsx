import { Container } from "../styles/Container.styled";
import {
    TransportNumberOfCard,
    TransportCardItem,
} from "../styles/Transport.styled";

import TransportImage from "./TransportImage";

import { FlexRow } from "../styles/TransportCardsSlider.styled";

const TransportCardsSlider = () => {
    return (
        <>
            <FlexRow>
                <TransportCardItem>
                    <Container>
                        <TransportNumberOfCard>01/02</TransportNumberOfCard>
                    </Container>
                    <TransportImage
                        image="/the-big-truck.png"
                        layout={undefined}
                        width="2000"
                        height="2000"
                    ></TransportImage>
                    <div>
                        <h3>Автотранспорт</h3>
                        <p>
                            — Собственная автотранспортная компания
                            <br />
                            — Перевозка негабаритных и тяжеловесных грузов
                            <br />
                            — Доставка в любую точку России
                            <br />
                        </p>
                    </div>
                </TransportCardItem>
                <TransportCardItem>
                    <Container>
                        <TransportNumberOfCard>02/02</TransportNumberOfCard>
                    </Container>
                    <TransportImage
                        image="/railway-transport.jpg"
                        layout={undefined}
                        width="2000"
                        height="2000"
                    ></TransportImage>
                    <div>
                        <h3>Железнодорожный транспорт</h3>
                        <p>
                            На заводе имеется ж/д ветка, заходящая в
                            производственное здание
                        </p>
                    </div>
                </TransportCardItem>
            </FlexRow>
        </>
    );
};

export default TransportCardsSlider;
