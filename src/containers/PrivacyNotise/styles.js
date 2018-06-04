import styled from 'styled-components';

export const Header = styled.div`
    text-transform: uppercase;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: .5px;
    margin-bottom: 3px;
`;

export const Text = styled.div`
    font-size: 17px;
    padding-left: 10px;
`;

export const TextWrapper = styled.div`
    padding-bottom: 30px;
    &:last-child{
        padding-bottom: 0;
    }
`;

export const StyledWrapper = styled.div`
    width: 80%;
    margin 50px 10% 120px;
    display: inline-block;
    background: #fff;
    padding: 30px;
    box-shadow: 0 0 7px 1px darkgrey;
`;

export const Terms = styled.div`
    width:100%;
    margin: auto;
    padding: 10px 30px 30px 0;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
`;