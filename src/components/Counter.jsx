import React, { useState } from 'react';

const Counter = () => {
    const [times, setTimes] = useState(0)
    return (
        <div style={{borderStyle: 'solid', width:'300px'}}>
                <button onClick={()=>setTimes(times+1)}>+</button>
                <button onClick={()=>setTimes(times-1)}>-</button>
                <p>Вы нажали {times} раз</p>
        </div>
    );
};

export default Counter;