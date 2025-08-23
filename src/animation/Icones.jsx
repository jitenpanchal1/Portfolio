import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import "../Css/icon.css"

function Icones() {
    return (
        <div className="absolute inset-0 overflow-hidden z-10">
            <div className="floating-icons">
                <span className="icon react"><FaReact /></span>
                <span className="icon tailwind"><SiTailwindcss /></span>
                <span className="icon js"><FaJsSquare /></span>
                <span className="icon mdb"><SiMongodb /></span>
                <span className="icon css"><FaCss3Alt /></span>
                <span className="icon html"><FaHtml5 /></span>
            </div>
        </div>
    )
}

export default Icones


