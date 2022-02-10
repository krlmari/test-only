import Image from "next/image";

const Slider = (props) => {
    return (
        <>
            <div className="card-image">
                <Image
                    src={props.imageCard ? "/the-big-truck.png" : ""}
                    alt="transport picture"
                    width={800}
                    height={800}
                />
            </div>
        </>
    );
};

export default Slider;
