import styled from "styled-components";

export const Container = styled.div`
    padding: 0 80px;

    @media ${(props) => props.theme.media.m1280} {
        padding: 0 30px;
    }
`;
