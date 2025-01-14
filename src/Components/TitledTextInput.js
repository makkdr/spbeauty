import styled from "styled-components";

const Input = styled.input`
    outline: none;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    &:hover {
        background: #F8FAFC;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;