import styled from "styled-components";

export const AboutStyled = styled.section`
    min-height: 245px;
`;

export const AboutHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 136px;
    margin-bottom: 125px;

    h2 {
        font-style: normal;
        font-weight: 300;
        font-size: 47px;
        line-height: 1.5;
        color: ${(props) => props.color || props.theme.colors.black};
        align-self: start;
        width: 1050px;
    }

    p {
        max-width: 1200px;
        align-self: end;
        padding-top: 20px;
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 1.6;
        color: ${(props) => props.color || props.theme.colors.black};
        padding-left: 50px;
    }

    @media ${(props) => props.theme.media.m760} {
        flex-direction: column;
        margin-top: 40px;
        margin-bottom: 30px;

        h2 {
            width: auto;
            font-size: calc(
                25px + (47 - 25) * ((100vw - 320px) / (1024 - 320))
            );
        }
        p {
            padding-left: 0;
            font-size: calc(
                16px + (25 - 16) * ((100vw - 320px) / (1024 - 320))
            );
        }
    }
`;

export const AboutContainer = styled.div`
    padding-right: 80px;
    display: flex;
    flex-direction: row;

    @media ${(props) => props.theme.media.m760} {
        flex-direction: column;
        padding-right: 0;
    }
`;

export const AboutImage = styled.div`
    width: 50vw;
    height: 580px;
    background-image: url(/processing-plant.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media ${(props) => props.theme.media.m760} {
        width: 100%;
        height: 320px;
    }
`;

export const AboutDescription = styled.div`
    width: 40vw;
    padding-left: 80px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.8;
    color: ${(props) => props.color || props.theme.colors.black};

    @media ${(props) => props.theme.media.m1280} {
        padding-left: 40px;
    }

    @media ${(props) => props.theme.media.m760} {
        width: auto;
        padding-left: 30px;
        padding-right: 30px;
        font-size: calc(14px + (25 - 14) * ((100vw - 320px) / (1024 - 320)));
        margin-top: 30px;
    }
`;
