import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background-color: #fff;
`;

export const ImageWrapper = styled.img`
    width: 30%;
    margin: 4px 35% 0;
    border: 2px solid rgb(22, 131, 147);
`;

export const ButtonWrapper = styled.div`
    display: inline-block;
    width: calc(100%);
    margin-top: 70px;
    background-color: rgb(230,230,230);
    padding: 10px;
`;

export const StyledMainHeader = styled.div`
    font-size: 30px;
    letter-spacing: 1px;
    color: rgb(80,80,80);
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: rgb(230,230,230);
`;

export const PickFileButton = styled.button`
    display: inline-block;
    height: 80px;
    margin: 70px 35% 0;
    width: 30%;
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
