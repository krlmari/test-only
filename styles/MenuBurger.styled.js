import styled from "styled-components";

export const BurgerStyled = styled.button`
    @media ${(props) => props.theme.media.m760} {
        width: 30px;
        height: 11px;
        background-image: url(/burger-menu.svg);
        cursor: pointer;
        align-self: center;
    }
`;

export const CrossStyled = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    background-image: url(/cross-svgrepo-com.svg);
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const MenuBurgerStyled = styled.div`
    @media ${(props) => props.theme.media.m760} {
        position: fixed;
        width: 50vw;
        height: 500px;
        background: white;
        right: 0;
        top: 0;
        box-shadow: 5px 1px 15px black;
        z-index: 99;
        text-align: center;

        nav {
            display: block;
            width: 100%;
            height: 90%;
            padding-top: 30%;
        }

        ul {
            display: flex;
            color: black;
            flex-direction: column;
            align-items: center;
            height: 100%;
        }

        a {
            font-size: calc(14px + (18 - 14) * ((200vw - 760px) / (760 - 300)));
        }
    }
`;

export const MenuBurgerNav = styled.div`
    @media ${(props) => props.theme.media.m760} {
    }
`;

export const MenuBurgerBlur = styled.div``;

export const MenuBurgerContent = styled.div`
    width: 50vw;
    height: 100vh;
`;
