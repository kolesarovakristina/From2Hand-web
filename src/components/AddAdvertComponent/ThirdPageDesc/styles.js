import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background-color: #fff;
`;

export const StyledTitle = styled.div`
    font-size: 28px;
    letter-spacing: 1px;
    color: rgb(80,80,80);
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: rgb(230,230,230);
    margin-bottom: 60px;
`;

export const StyledTextArea = styled.textarea`
    resize: vertical;
    display: block;
    border: 1px solid rgb(22,131,147);
    padding: 15px;
    width: 55%;
    margin: auto;
    font-size: 17px;
    outline: 0;
        &:focus{
            border: 2px solid rgb(22,131,147);
        }
`;

export const StyledInput = styled.input`
    display: block;
    margin: 3px auto 0;
    width: calc(55%);
    height: 35px;
    font-size: 17px;
    letter-spacing: .5px;
    border: 1px solid rgb(22,131,147);
    padding: 0 10px;
    color: rgb(130,130,130);
    outline: 0;
        &:focus {
            border: 2px solid rgb(22,131,147);
        }
`;

export const SelectWrapper = styled.div`
    width: 100%;
    display:inline-block;
    text-align: center;
`;

export const StyledSelect = styled.select`
    display: inline-block;
    width: calc(55%);
    margin-top: 3px;
    height: 35px;
    font-size: 17px;
    letter-spacing: .5px;
    border: 1px solid rgb(22,131,147);
    padding: 0 10px;
    color: rgb(130,130,130);
    outline: 0;
        &:focus {
            border: 2px solid rgb(22,131,147);
        }`;

export const StyledOption = styled.option``;

export const ButtonWrapper = styled.div`
    display: inline-block;
    width: calc(100%);
    margin-top: 70px;
    background-color: rgb(230,230,230);
    padding: 10px;
`;

export const StyledButton = styled.button`
    display: inline-block;
    height: 50px;
    margin: 15px;
    width: 20%;
    font-size: 18px;
    border: 1px solid rgb(22, 131, 147);
    background-color: rgb(22, 131, 147);
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all .15s ease-in-out;
        &:hover {
        background-color: #fff;
        color: rgb(22, 131, 147);
        }
    &:last-child {
        // background-color: #000;
        float: right
    }
`;