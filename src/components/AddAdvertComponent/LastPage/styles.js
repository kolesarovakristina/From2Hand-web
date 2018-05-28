import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background-color: #fff;
`;

export const Wrapper = styled.div`
    padding-top: 60px;
    width: 70%;
    margin: auto;
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

export const StyledTitle = styled.div`
    width: calc(100%);
    background: rgb(22,131,147);
    color: #fff;
    padding: 10px 20px;
    font-size: 25px;
    letter-spacing: .5px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const TitleWrapper = styled.div`
    padding: 20px;
    background: rgb(247,247,247);
    border-radius: 10px;
    border-bottom: 2px solid rgb(200,200,200);
    &:nth-child(even){
        background: rgb(237,237,237);
    }
`;

export const StyledHeader = styled.span`
    color: rgb(22,131,147);
    // padding: 0px 20px;
    width: calc(100% - 40px);
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`; 
export const StyledText = styled.span`
    color: rgb(80,80,80);
    // padding: 0px 20px;
    width: calc(100% - 40px);
    display: inline-block;
    font-size: 17px;
    font-weight: bold;
`;

export const ImageWrapper = styled.div`
    display: inline-block;
    width: 100%;
    float: left;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const StyledImage = styled.img`
    width: 100%;
`;

export const TextWrapper = styled.div`
    display: inline-block;
    width: 100%;
    float: left;
`;

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