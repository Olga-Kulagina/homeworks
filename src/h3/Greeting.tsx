import React from "react";
import s from "./Greeting.module.css";
import {UserType} from './HW3';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (newName: string) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""; // need to fix with (?:)

    return (
        <div className={s.container}>
            <div>
                <h2>Приветствие!</h2>
                <p>Введите имя пользователя</p>
                <input value={name} onChange={(e) => setNameCallback(e.currentTarget.value)} className={inputClass}/>
                {error && <span className={s.errorMessage}>{error}</span>}
                <button className={s.addBtn} onClick={() => addUser(name)}>Передать привет</button>
            </div>
            <div>
                <div>Их уже поприветствовали:</div>
                <div>
                    {users.length === 0 ? '-' : <ul className={s.list}>{users.map(u => <li>{u.name}</li>)}</ul>}
                </div>
                <div>
                    Итого: <span>{totalUsers}</span>
                </div>
            </div>
        </div>
    );
}

export default Greeting;
