import styled from "styled-components";

export const MenuBurger = styled.div`
    @media ${(props) => props.theme.media.m760} {
        width: 30px;
        height: 11px;
        background-image: url(/burger-menu.svg);
        cursor: pointer;
    }
`;
