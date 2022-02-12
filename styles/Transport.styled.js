import styled from "styled-components";

export const TransportStyled = styled.section`
    position: relative;

    h2 {
        margin-top: 136px;
        margin-bottom: 40px;
        font-style: normal;
        font-weight: 300;
        font-size: 47px;
        line-height: 1.5;
        color: #1c1c1c;
    }

    @media ${(props) => props.theme.media.m760} {
        margin-top: 44px;

        h2 {
            margin-top: 44px;
            font-size: calc(
                25px + (47 - 25) * ((100vw - 320px) / (1024 - 320))
            );
        }
    }
`;

export const TransportContent = styled.div`
    @media ${(props) => props.theme.media.m760} {
        overflow: hidden;
    }
`;

export const TransportNumberOfCard = styled.p`
    display: none;

    @media ${(props) => props.theme.media.m760} {
        display: block;
        margin-bottom: 20px;
        font-size: 16px;
    }
`;

export const TransportCards = styled.div`
    height: 620px;
    @media ${(props) => props.theme.media.m760} {
        display: flex;
        flex-direction: row;
        width: calc(100vw - (100vw - 1400px) / 2);
    }
`;

export const TransportCardImageDesktop = styled.div`
    position: relative;
    width: 50vw;
    height: 620px;
    float: left;

    @media ${(props) => props.theme.media.m760} {
        display: none;
    }
`;

export const TransportTransformCard = styled.div`
    transform: scaleX(-1);
`;

export const TransportCardItem = styled.div`
    display: flex;
    min-height: 279px;
    cursor: pointer;
    height: 50%;
    align-items: center;
    transition: background-color 1s;

    div {
        padding-right: 80px;
        padding-left: 60px;
    }
    h3 {
        margin-bottom: 19px;
        font-weight: 300;
        font-style: normal;
        font-size: 25px;
    }
    p {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 1.8;
        color: ${(props) => props.color || props.theme.colors.black};
    }

    &:hover {
        background-color: #f6f6f6;
    }

    @media ${(props) => props.theme.media.m760} {
        display: block;
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 30px;
        cursor: auto;

        &:hover {
            background-color: ${(props) =>
                props.color || props.theme.colors.white};
        }

        div {
            padding-top: 20px;
            margin-left: 0;
            padding-right: 0;
            padding-left: 0;
        }
        p {
            font-size: 16px;
        }
    }
`;
