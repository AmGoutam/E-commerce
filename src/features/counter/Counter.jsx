import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from './CounterSlice';

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <div>

        </div>
    )
}

export default Counter
