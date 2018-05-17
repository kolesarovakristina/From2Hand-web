import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background-color: #fff;
`;

export const ButtonWrapper = styled.div`
    display: inline-block;
    width: calc(100% - 20px);
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
