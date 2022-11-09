import React, { useState } from 'react'

export default function Clock() {

    const [timer, setTimer] = useState(null);

    function tick() {
        const time = new Date().toLocaleTimeString();
        setTimer(time);
    }

    setInterval(tick, 1000);

  return (
    <div>
        <h1>Hello World!</h1>
        {timer != null && <h2>It is {timer}.</h2>}
    </div>
  )
}
