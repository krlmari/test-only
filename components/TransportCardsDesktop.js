import { useState } from "react";
import TransportImage from "./TransportImage";
import {
    TransportCards,
    TransportCardImageDesktop,
    TransportCardItem,
} from "../styles/Transport.styled";

const TransportCardsDesktop = () => {
    const [imageActive, setImageActive] = useState("/the-big-truck.png");

    return (
        <div>
            <div>
                <TransportCardImageDesktop>
                    <TransportImage
                        image={imageActive}
                        layout="fill"
                    ></TransportImage>
                </TransportCardImageDesktop>
            </div>
            <TransportCards>
                <TransportCardItem
                    onMouseOver={() => setImageActive("/the-big-truck.png")}
                >
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
                <TransportCardItem
                    onMouseOver={() => setImageActive("/railway-transport.jpg")}
                >
                    <div>
                        <h3>Железнодорожный транспорт</h3>
                        <p>
                            На заводе имеется ж/д ветка, заходящая в
                            производственное здание
                        </p>
                    </div>
                </TransportCardItem>
            </TransportCards>
        </div>
    );
};

export default TransportCardsDesktop;
