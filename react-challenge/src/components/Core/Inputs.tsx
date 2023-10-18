import { ChangeEventHandler } from "react";
import { styled } from "styled-components";
interface iInputText {
    label: string;
    name: string;
    onChangeText:Function;
}

const InputWrapper = styled.div`
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
`;

const Input = styled.input`
    width: 150px;
    border-radius: 4px;
    border-color: transparent;
`;

export function InputText(props: iInputText) {
    return (
        <InputWrapper>
            <label htmlFor={props.name} >{props.label}</label>
            <Input type="text" name={props.name} onChange={props.onChangeText}/>
        </InputWrapper>
    );
}