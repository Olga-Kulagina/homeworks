import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<string>('Time');
    const [show, setShow] = useState<boolean>(false);

    function formatDate(date: Date) {

        let m

        let dd = date.getDate()

        let mm = date.getMonth() + 1
        if (mm < 10) m = '0' + mm

        let yy = date.getFullYear() % 100

        return dd + '.' + m + '.' + yy
    }

    function formatTime(date: Date) {

        let h = date.getHours()

        let m = date.getMinutes()

        let s = date.getSeconds()

        return h + ' : ' + m + ' : ' + s
    }

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(formatTime(new Date()))
        }, 1000);
        setTimerId(id);
    }


    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = date; // fix with date
    const stringDate = formatDate(new Date()); // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
