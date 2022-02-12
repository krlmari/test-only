import {
    MenuBurgerStyled,
    BurgerStyled,
    CrossStyled,
} from "../styles/MenuBurger.styled";
import Nav from "./Nav";

const MenuBurger = ({ items, menuActive, setActive }) => {
    return (
        <>
            {menuActive ? (
                <MenuBurgerStyled>
                    <CrossStyled
                        onClick={() => setActive(!menuActive)}
                    ></CrossStyled>
                    <Nav items={items} />
                </MenuBurgerStyled>
            ) : (
                ""
            )}
        </>
    );
};

export default MenuBurger;
