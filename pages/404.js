import { useEffect } from "react";
import { useRouter } from "next/router";
import { CenterBlock } from "../styles/CenterBlock.styled";

const Error = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, [router]);

    return (
        <>
            <CenterBlock>
                <h1>404</h1>
                <h2>Something is going wrong...</h2>
            </CenterBlock>
        </>
    );
};

export default Error;
