import Image from "next/image";
import Slider from "./Slider";

const Transport = () => {
    return (
        <>
            <div className="transport">
                <div className="transport-container">
                    <h2 className="container">Транспорт</h2>
                    <div className="transport-content">
                        <p className="transport__numbers container">01/02</p>
                        <div className="cards-image">
                            <div className="card-image card-image-relative"></div>
                            <div className="card-image card-image-absolute"></div>
                        </div>
                        <div className="cards flex-column">
                            <div className="card-item">
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
                            </div>
                            <div className="card-item">
                                <div>
                                    <h3>Железнодорожный транспорт</h3>
                                    <p>
                                        На заводе имеется ж/д ветка, заходящая в
                                        производственное здание
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transport;
