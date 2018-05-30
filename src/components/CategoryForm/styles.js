import styled from "styled-components";


export const StyledWrapper = styled.div`
width: 100%;
padding: 30px;
`;
export const StyledInput = styled.input`
display: block;
    height: 80px;
    margin: 3px auto;
    padding: 0 30px;
    width: 40%;
    font-size: 17px;
    border: 1px solid rgb(22, 131, 147);
    font-weight: bold;
    transition: all .15s ease-in-out;
    background-color: #fff;
`;
export const StyledButton = styled.button`
    display: block;
    height: 80px;
    margin: 3px auto;
    width: 40%;
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
`;