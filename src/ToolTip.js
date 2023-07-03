import { useEffect, useReducer, useRef } from "react";
import Tool from './Tool.css';


const ToolTip = ({ position }) => {
    const spanRef = useRef()
    useEffect(() => {
        if(position === 'top') {
            spanRef.current.style.bottom = '120%';
            spanRef.current.style.left = '50%';
            spanRef.current.style.marginLeft = '-110px';
        }
        if(position === 'bottom') {
            spanRef.current.style.bottom = '50%';
            spanRef.current.style.bottom = '135%';
            spanRef.current.style.marginBottom = '-70px';
            spanRef.current.style.left = '-50%';
        }
        if(position === 'left') {
            spanRef.current.style.top = '-50%';
            spanRef.current.style.right = '110%';
        }
        if(position === 'right') {
            spanRef.current.style.top = '-50%';
            spanRef.current.style.left = '110%';
        }
    }, [position])
    return (
        <div className="tooltip">
            Hover on me!
             <span ref={spanRef} className="tooltiptext"> Welcome to TOOLTIP! </span>
        </div>
    )
}
export default ToolTip;