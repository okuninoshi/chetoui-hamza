import React from "react";
import { useState } from "react";

import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { Link } from 'gatsby';
/**
 * This is an example of animating between different components in Framer Motion 2.
 *
 * By wrapping a tree with AnimateSharedLayout, children can be given a layoutId.
 *
 * When a component with a layoutId is removed and a new one with the same layoutId
 * is added elsewhere, the new component will animate from the old one.
 *
 * The outline being animated here is four different components, animated like one.
 */

const Styles = styled.div`
    .navigations{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: ${props => props.flexDir || "row"};
        flex-wrap: wrap;
        position:relative;
    }

    .link {
        position: relative;
        display: block;
        cursor: pointer;
        padding:4px;
        padding-right:12px;
        a{
            color:${props => props.theme.palette.arctic_lime};
        }
    }

    .outline {
        position: absolute;
        top:-2px;
        left:-1px;
        height:100%;
        width:100%;
        filter:opacity(0.61);
        box-shadow: 
        -1px 1px 0px ${props => props.theme.palette.arctic_lime},
        -2px 2px 0px ${props => props.theme.palette.arctic_lime},
        -3px 3px 0px ${props => props.theme.palette.arctic_lime},
        -4px 4px 0px ${props => props.theme.palette.arctic_lime},
        -5px 5px 0px ${props => props.theme.palette.arctic_lime},
        inset -1px 1px 0px #5c6a25,
        inset -2px 2px 0px #5c6a25,
        inset -3px 3px 0px #5c6a25,
        inset -4px 4px 0px #5c6a25,
        inset -5px 5px 0px #5c6a25;
        background-blend-mode: difference;
    }
    
 `
export default function Nav({ flexDir, ...props }) {
    const [selected, setSelected] = useState(colors[0]);

    return (
        <Styles flexDir={flexDir}>
            <AnimateSharedLayout>
                <nav className="navigations">
                    {colors.map(({ color, to, name }) => {
                        return (
                            <Item
                                to={to}
                                name={name}
                                key={color}
                                color={color}
                                isSelected={selected === color}
                                onMouseEnter={() => setSelected(color)}
                                {...props}

                            />
                        )
                    })}
                </nav>
            </AnimateSharedLayout>
        </Styles>

    );
}

function Item({ color, to, name, isSelected, onMouseLeave, onMouseEnter, ...props }) {

    return (
        <div
            className="link mx-1 mx-md-3"
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            role="link"
        >
            <Link to={to} activeStyle={{ color: color }} {...props}>
                {isSelected && (
                    <motion.div
                        layoutId="outline"
                        className="outline"
                        initial={false}
                        animate
                        transition={spring}
                    />
                )}
                {name}
            </Link>
        </div>
    );
}

const colors = [
    {
        color: "#684656",
        to: "/",
        name: "HOME"
    },
    {
        color: "#684657",
        to: "/contact",
        name: "CONTACT"
    },
    {
        color: "#684756",
        to: "/posts",
        name: "POSTS"
    },
    {
        color: "#694656",
        to: "/lab",
        name: "LAB"
    }
];

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};
