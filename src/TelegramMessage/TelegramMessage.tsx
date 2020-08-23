import React from 'react';
import s from './TelegramMessage.module.css'

type TelegramMessagePropsType = {
    avatarURL: string;
    userName: string;
    userMessage: string;
    messageTime: string;
}

function TelegramMessage(props: TelegramMessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img className={s.avatarImg}
                     src={props.avatarURL}
                     alt='avatar'/>
            </div>
            <div className={s.messageCloud}>
                <div className={s.userName}>
                    {props.userName}
                </div>
                <div className={s.userMessage}>
                    {props.userMessage}
                </div>
                <div className={s.messageTime}>
                    {props.messageTime}
                </div>
            </div>
        </div>
    )
}

export default TelegramMessage;