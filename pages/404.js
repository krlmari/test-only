import { useEffect } from "react";
import { useRouter } from "next/router";
import { ErrorStyled } from "../styles/ErrorStyled.styled";

const Error = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, [router]);

    return (
        <>
            <ErrorStyled>
                <h1>404</h1>
                <h2>Something is going wrong...</h2>
            </ErrorStyled>
        </>
    );
};

export default Error;
