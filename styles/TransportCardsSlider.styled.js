import styled from "styled-components";

export const CardsSlider = styled.div`
    display: none;

    @media ${(props) => props.theme.media.m760} {
        position: relative;
        display: block;
    }
`;

export const FlexRow = styled.div`
    @media ${(props) => props.theme.media.m760} {
        margin-left: 30px;
        margin-right: 30px;
        display: flex;
        flex-direction: row;
        flex-flow: nowrap;
        gap: 30px;
        width: 200vw;
    }
`;
