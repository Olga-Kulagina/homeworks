import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import preloader from './Preloader.svg'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import s from '../h4/HW4.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, any>(state => state.loading.isLoading);
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div className={s.column} style={{textAlign: 'center'}}>
            <h3>Preloader</h3>
            {loading
                ? (
                    <div><img src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    );
}

export default HW10;
