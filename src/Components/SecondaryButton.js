import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
        width: 217px;
        height: 34px;
        background: #FFFFFF;
        border: 1px solid #64748B;
        border-radius: 24px;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: #FFFFFF;
            opacity: 0.8;
            border-radius: 24px;
            color: #64748B;
            border-color: white;
        }
        &:active {
            background: #FFFFFF;
            opacity: 0.6;
            border-radius: 24px;
            color: #64748B;
            border-color: white;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;