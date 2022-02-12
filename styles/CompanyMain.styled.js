import styled from "styled-components";

export const CompanyDescription = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 160%;
    color: ${(props) => props.color || props.theme.colors.white};
    margin-top: 48px;
`;

export const CompanyImage = styled.div`
    @media ${(props) => props.theme.media.m760} {
        height: 320px;
        width: 100%;
        background-image: url("/tanks-and-smokestacks.png");
        background-size: cover;
        object-fit: fill;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 60px;
    }
`;

export const CompanySecondLink = styled.div`
    display: flex;
    margin-top: 165px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.6;
    align-items: center;
    color: ${(props) => props.color || props.theme.colors.white};
    opacity: 0.5;

    @media ${(props) => props.theme.media.m760} {
        margin-top: 60px;
    }
`;
