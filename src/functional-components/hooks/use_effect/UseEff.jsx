import React, { useEffect, useState } from 'react'

const UseEff = () => {

    //initialize a state 
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((S) => S + 1);
        }, 1000)


        //claeanup function (unmount)
        return () => clearInterval(interval);


    }, []);//empty dependancy array run once an mount


    return (
        <div>
            <p>Timer :{seconds} seconds</p>
        </div>
    )
}

export default UseEff
