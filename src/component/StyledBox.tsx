"use client";

import styled from '@emotion/styled';
import { ReactNode } from 'react';


// used with backticks : 👍
const StyledBox = styled.div`  
background-color : #000000;
color : #ffffff;
border : 1px solid white;
display : flex;
align-items: center;
justify-content : center;
margin-top : 100px;
width : 300px;
height : 60px;
margin-inline : auto;
border-radius : 15px;

&:hover {
    background-color : #ffffff;
    color : #000000;
    border : 2px solid black;
    cursor : pointer;
}

&:active {

    background-color : #f0f0f0;
    user-select : none;
}`

type StylisBoxProps = {
    children : ReactNode;
}


export default function StylisBox({children} : StylisBoxProps) {

    return <StyledBox> {children} </StyledBox>;

}