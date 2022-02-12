import styled from "styled-components";

export const StyledHeader = styled.header`
    background: linear-gradient(#5551f7, #5551f7) left/50vw 100vh no-repeat,
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("/tanks-and-smokestacks.png") right no-repeat;
    height: 800px;
    width: 100%;
    h1 {
        font-style: $normal-font-style;
        font-weight: 500;
        font-size: 84px;
        line-height: 100%;
        color: ${(props) => props.color || props.theme.colors.white};
        margin-top: 20px;
    }
    hr {
        width: 50vw;
        padding: 0;
        margin-right: 50%;
        color: #d6d6d6;
        margin-top: 195px;
    }

    @media ${(props) => props.theme.media.m760} {
        background: linear-gradient(#5551f7, #5551f7);
        height: auto;

        h1 {
            font-size: calc(
                40px + (84 - 40) * ((100vw - 320px) / (1024 - 320))
            );
            font-weight: 300;
        }
        hr {
            display: none;
        }
        p {
            font-size: calc(
                16px + (25 - 16) * ((100vw - 320px) / (1024 - 320))
            );
        }
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 33px;

    @media ${(props) => props.theme.media.m1280} {
        padding-top: 30px;
    }
`;

export const HeaderCompany = styled.div`
    display: flex;

    a {
        margin-left: 20px;
        font-size: 14px;
        line-height: 1;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${(props) => props.color || props.theme.colors.white};
        align-self: center;
    }
`;
