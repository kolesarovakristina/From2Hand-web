import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 53%;
    margin: 50px auto 120px;
`;

export const NavCategory = styled.div `
    color: rgb(75,75,75);
    margin:2px;
    font-weight: bold;
    width: calc(33.333% - 4px);
    height: 100px;
    line-height:100px;
    font-size: 17px;
    text-transform: uppercase;
    leter-spacing: 1px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    transition: all .2s ease-in-out;
    background-color: rgba(230,230,230);
        &:hover{
            background-color: rgb(130,130,130);
            color: #fff;
            border-radius: 5px;
            transform: scale(1.02);
        }
`;

export const NavHeader = styled.div `
    text-transform: uppercase;
    font-weight: bold;
    background-color: rgb(110,110,110);
    color: #fff;
    font-size: 20px;
    letter-spacing: .5px;
    width: calc(100% - 4px);
    padding: 0px 30px;
    height: 60px;
    line-height: 60px;
    margin: 2px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`;
