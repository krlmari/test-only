import { Container } from "../styles/Container.styled";
import {
    TransportNumberOfCard,
    TransportCardItem,
} from "../styles/Transport.styled";
import TransportImage from "./TransportImage";
import { CardsFlexRow } from "../styles/TransportCardsSlider.styled";
import { TransportTransformCard } from "../styles/Transport.styled";

const TransportCardsSlider = () => {
    return (
        <>
            <CardsFlexRow>
                <TransportCardItem>
                    <Container>
                        <TransportNumberOfCard>01/02</TransportNumberOfCard>
                    </Container>
                    <TransportTransformCard>
                        <TransportImage
                            image="/the-big-truck.png"
                            layout={undefined}
                            width="1000"
                            height="1000"
                        ></TransportImage>
                    </TransportTransformCard>
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
                    <TransportTransformCard>
                        <TransportImage
                            image="/railway-transport.jpg"
                            layout={undefined}
                            width="1000"
                            height="1000"
                        ></TransportImage>
                    </TransportTransformCard>
                    <div>
                        <h3>Железнодорожный транспорт</h3>
                        <p>
                            На заводе имеется ж/д ветка, заходящая в
                            производственное здание
                        </p>
                    </div>
                </TransportCardItem>
            </CardsFlexRow>
        </>
    );
};

export default TransportCardsSlider;
