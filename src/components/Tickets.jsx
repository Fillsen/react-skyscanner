import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export default function Tickets() {
    // Redux
            const dispatch = useDispatch()
                const store = useSelector(store => store)
    const quote = useSelector(state => state.data.quotes)

    return (
        <>
        <div>test from component</div>
        <button onClick={() => dispatch({type: 'CLICK'})}>Test</button>
        </>
    );
}