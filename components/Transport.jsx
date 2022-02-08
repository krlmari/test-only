import Image from "next/image";

const Transport = () => {
    return (
        <>
            <div className="transport">
                <div className="transport-container">
                    <h2 className="container">Транспорт</h2>
                    <div className="transport-content">
                        <div className="card-image"></div>
                        <div className="flex-column">
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
