import styled from "styled-components";

export const TransportDesktop = styled.div`
    @media ${(props) => props.theme.media.m760} {
        display: none;
    }
`;
