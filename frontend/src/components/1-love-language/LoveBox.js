import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const Filled = styled.div`
    border-width: 1px;
    border-color: white;
    border-style: solid;
    height: 100px;
    width: 100px;
    background-color: white;
    margin-left: 0;
`;
const Opened = styled.div`
    border-width: 1px;
    border-color: white;
    border-style: solid;
    height: 100px;
    width: 100px;
    margin-left: 0;
`;
const BoxText = styled.div`
    text-align: center;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 20px;
    margin-left: 0;
`;
const FadeIn = styled.div`
    animation: 0.5s ${keyframes`${fadeIn}`};
`;

function Box({text, fontSize}) {
    return (
        <div>
            <Opened>
                <BoxText style={{fontSize: fontSize}}>{text}</BoxText>
            </Opened>
        </div>
    )
}

function LoveBox({paddingLeft = 0, text = "Love You", verticalSpace = 0, fontSize = 12}) {
    const [active, setActive] = useState(false);
    return(
            <div onMouseEnter={() => {setActive(true)}} style={{marginLeft: (paddingLeft + 'vw'), marginTop: (verticalSpace + 'vh'), marginRight: 0}}>
                {active ? (
                    <FadeIn>
                        <Box text={text} fontSize={fontSize}/>
                    </FadeIn>
                ) : (
                    <Filled />
                )}
            </div>
    )
}

export default LoveBox;