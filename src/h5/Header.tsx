import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';
import s from './HW5.module.css'

function Header() {

    let [menuToggle, setMenuToggle] = useState<boolean>(false);

    return (
        <div className={s.menu}>
            <div className={s.menuToggle} onClick={() => setMenuToggle(!menuToggle)}>
                Menu
            </div>
            {
                menuToggle ?
                    <div className={s.menuButtons}>
                        <NavLink className={s.menuBtn} activeClassName={s.menuBtnActive}
                                 to={PATH.PRE_JUNIOR}>PRE JUNIOR</NavLink>
                        <NavLink className={s.menuBtn} activeClassName={s.menuBtnActive}
                                 to={PATH.JUNIOR}>JUNIOR</NavLink>
                        <NavLink className={s.menuBtn} activeClassName={s.menuBtnActive}
                                 to={PATH.JUNIOR_PLUS}>JUNIOR PLUS</NavLink>
                    </div> : ''
            }

        </div>
    );
}

export default Header;
