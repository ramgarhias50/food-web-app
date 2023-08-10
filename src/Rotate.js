import React, { useRef, useEffect } from "react";
import Data from './data.json';
export default function Rotate() {

    const graph = useRef(null);

    useEffect(() => {
        const ciclegraph = graph.current;
        const circleElements = ciclegraph.childNodes;

        let angle = 360 - 90;
        let dangle = 360 / circleElements.length;

        for (let i = 0; i < circleElements.length; i++) {
            let circle = circleElements[i];
            angle += dangle;
            circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2
                }px) rotate(-${angle}deg)`;
        }
    }, []);

    return (
        <div>
            <div className="relative w-[490px] h-[490px] m-[calc(100px/2 +0px)] before:absolute before:content-[''] before:top-0 before:left-0 before:border-dashed before:border-2 before:border-white before:w-[calc(100%-2px*2)] before:h-[calc(100%-2px*2)] before:rounded-full" ref={graph}>
                {Data.map(record => {
                    return (
                        <div key={record.id} className="absolute top-1/2 left-1/2 w-[110px] h-[100px] m-[calc(-100px/2)] rounded-full">
                            <img src={require(`${record.image}`)} alt="this is food"></img>
                        </div>
                    )
                })}
            </div>

        </div >
    );
}
