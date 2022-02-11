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

export const TransportCardImageMobile = styled.div`
    display: none;
    @media ${(props) => props.theme.media.m760} {
        display: block;
        width: 500px;
        height: 400px;
        margin-left: 30px;
    }
`;

export const TransportCardItem = styled.div`
    min-height: 279px;
    margin-bottom: 62px;
    margin-left: 50%;
    cursor: pointer;

    div {
        padding-top: 75px;
        padding-right: 80px;
        padding-left: 82px;
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
            padding-right: 30px;
            padding-left: 0;
        }
        p {
            font-size: 16px;
        }
    }
`;
