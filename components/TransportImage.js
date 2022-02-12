import Image from "next/image";

const TransportImage = ({ image, layout, width = 0, height = 0 }) => {
    return (
        <>
            <Image
                src={image}
                alt="Picture of the transport"
                layout={layout}
                width={width}
                height={height}
                objectFit="cover"
            />
        </>
    );
};

export default TransportImage;
