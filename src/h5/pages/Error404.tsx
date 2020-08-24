import React from "react";
import s from '../HW5.module.css'

function Error404() {
    return (
        <div>
            <div className={s.error}>404</div>
            <div>Page not found! I have paws!</div>
            <div className={s.cat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
