import styled from "styled-components";

export const NoActiveLink = styled.a`
    opacity: 0.5;

    @media ${(props) => props.theme.media.m1280} {
        a {
            font-size: calc(
                12px + (14 - 12) * ((100vw - 760px) / (1280 - 760))
            );
        }
    }
`;
