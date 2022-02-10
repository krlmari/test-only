import styled from "styled-components";

export const NavBar = styled.nav`
    align-self: center;
    margin-left: 10px;
    width: 45vw;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${(props) => props.color || props.theme.colors.white};

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    li {
        opacity: 0.5;
    }

    @media ${(props) => props.theme.media.m1280} {
        width: 67vw;

        a {
            font-size: calc(
                12px + (14 - 12) * ((100vw - 760px) / (1280 - 760))
            );
        }
    }

    @media ${(props) => props.theme.media.m760} {
        width: auto;
        align-self: center;

        ul {
            display: none;
        }
    }
`;
