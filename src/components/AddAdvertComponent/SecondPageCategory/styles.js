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

export const StyledSelect = styled.select`
    width: 40%;
    display: inline-block;
    margin 2px 30%;
    height: 50px;
    font-size: 19px;
    letter-spacing: .5px;
    border: 1px solid rgb(22,131,147);
    padding: 0 10px;
    color: rgb(130,130,130);
    outline: 0;
        &:focus {
            border: 2px solid rgb(22,131,147);
        }
`;

export const StyledOption = styled.option`
    display: inline-block;
    font-size: 16px;
    border: 0;
`;

export const ButtonWrapper = styled.div`
    display: inline-block;
    width: calc(100%);
    margin-top: 60px;
    background-color: rgb(230,230,230);
    padding: 10px;
    // border-top: 2px solid darkgrey;
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