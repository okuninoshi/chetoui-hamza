import React from "react";
import { useContext } from 'react'
import styled from 'styled-components';
import Context from '../../store/context'
// import { motion, AnimatePresence } from 'framer-motion'
import Layer1 from './layer1'
import Layer2 from './layer2'
import Layer3 from './layer3'
import Layer0 from './layer0'


const GlobaStyles = styled.div`
    position:relative;
    z-index:1;
    #lantern{
        fill:${props => props.isDark ? '#f2f2f3' : '#007bff'};
    }
    svg{
        width:100%;
    }
`

function Tokyo() {
    const { state } = useContext(Context)
    return (
        <GlobaStyles isDark={state.isDark}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg1625"
                width="1279.364"
                height="488.33218"
                x="0"
                y="0"
                fill="none"
                version="1.1"
                viewBox="0 0 1275.0286 439.748"
            >
                <defs id="defs1623">
                    <clipPath id="clip0">
                        <path id="rect1620" fill="#fff" d="M0 0H1140V471H0z"></path>
                    </clipPath>
                </defs>
                <defs
                    id="defs1623">
                    <linearGradient
                        id="linearGradient1653">
                        <stop
                            style={{ stopColor: "#9380f8", stopOpacity: 1 }}
                            offset="0"
                            id="stop1649" />
                        <stop
                            style={{ stopColor: "#162D55", stopOpacity: 1 }}
                            offset="1"
                            id="stop1651" />
                    </linearGradient>
                    <clipPath
                        id="clip0">
                        <rect
                            width="1140"
                            height="471"
                            fill="#ffffff"
                            id="rect1620"
                            x="0"
                            y="0" />
                    </clipPath>
                    <linearGradient
                        href="#linearGradient1653"
                        id="linearGradient1655"
                        x1="977.43951"
                        y1="51.951611"
                        x2="1036.236"
                        y2="11.932971"
                        gradientUnits="userSpaceOnUse" />
                </defs>
                <filter
                    style={{ colorInterpolationFilters: "sRGB" }}
                    id="filter2461">
                    <feFlood
                        floodOpacity="1"
                        floodColor="rgb(255,255,255)"
                        result="flood"
                        id="feFlood2451" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                        id="feComposite2453" />
                    <feGaussianBlur
                        in="composite1"
                        stdDeviation="6"
                        result="blur"
                        id="feGaussianBlur2455" />
                    <feOffset
                        dx="2.77556e-17"
                        dy="4.57967e-15"
                        result="offset"
                        id="feOffset2457" />
                    <feComposite
                        in="SourceGraphic"
                        in2="offset"
                        operator="over"
                        result="composite2"
                        id="feComposite2459" />
                </filter>
                {state.isDark && <Layer0 />}
                <Layer1 isDark={state.isDark} />
                <Layer2 isDark={state.isDark} />
                <Layer3 isDark={state.isDark} />
            </svg>
        </GlobaStyles>
    );
}

export default Tokyo;

