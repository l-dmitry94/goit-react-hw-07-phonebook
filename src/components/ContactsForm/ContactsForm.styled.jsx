import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 42px;
    outline: transparent;
    border-radius: 8px;
    border: 1px solid #000;
    transition: border-color 0.3s linear;
    box-sizing: border-box;
    font-size: 18px;
    padding: 0 20px;

    &:is(:hover, :focus) {
        border-color: green;
    }
`;

export const FormButton = styled.button`
    height: 42px;
    background-color: #47a581;
    border-radius: 8px;
    border: transparent;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
`;
