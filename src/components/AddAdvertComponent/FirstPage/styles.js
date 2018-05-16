import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background-color: #fff;
    padding: 0 0 60px;
`;

export const StyledTitle = styled.div`
    font-size: 30px;
    letter-spacing: 1px;
    color: rgb(80,80,80);
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: rgb(230,230,230);
`;

export const StyledInput = styled.input`
    display: inline-block;
    width: 50%;
    margin 0 25%;
    border: 1px solid rgb(22, 131, 147);
    padding: 15px;
    font-size: 20px;
    text-align: center;
    outline: 0;
    letter-spacing: .5px;
    margin: 60px 25% 20px; 
    &:focus {
        border: 2px solid rgb(22, 131, 147);
    }
`;

export const StyledButton = styled.button`
    display: inline-block;
    height: 60px;
    width: 22%;
    margin: 0 39%;
    font-size: 19px;
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


