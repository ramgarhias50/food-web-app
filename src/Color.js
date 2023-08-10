import React, { useState } from 'react'

function Color() {
    let [intailvalue, setIntailvalue] = useState("0")
    const colors = [
        {
            color: "#000",
        },
        {
            color: "#fff",
        }

    ]
    const plus = () => {
        setIntailvalue(intailvalue + "1")
    };
    const minus = () => {
        setIntailvalue(intailvalue - "1")
    }

    const colorr = colors.at(intailvalue).color;
    console.log(colorr)

    return (
        <div>Color
            <button onClick={plus} className="h-6 w-12 bg-black text-white">+</button>
            <button onClick={minus} className="h-6 w-12 bg-black text-white">-</button>
        </div >
    )
}

export default Color