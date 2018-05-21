import React from "react";
import { withRouter } from "react-router";
import { StyledWrapper, ImageWrapper, StyledImage, TextWrapper, StyledTitle, 
         StyledHeader, StyledText, ButtonWrapper, StyledButton, TitleWrapper, Wrapper, StyledMainHeader } from "./styles";
import image from '../../../assets/horse.jpg';

const LastPage = props => (
    <StyledWrapper>
        <StyledMainHeader>Check advert information & SUBMIT</StyledMainHeader>

        <Wrapper>
            <ImageWrapper>
                <StyledImage src={image}/>
            </ImageWrapper>

            <TextWrapper>
                <StyledTitle>{props.title}</StyledTitle>
                <TitleWrapper>
                    <StyledHeader>Category:</StyledHeader>
                    <StyledText>{props.category}</StyledText>
                </TitleWrapper>

                <TitleWrapper>
                    <StyledHeader>Subcategory:</StyledHeader>
                    <StyledText>{props.subcategory}</StyledText>
                </TitleWrapper>

                <TitleWrapper>
                    <StyledHeader>Description:</StyledHeader>
                    <StyledText>{props.desc}</StyledText>
                </TitleWrapper>

                <TitleWrapper>
                    <StyledHeader>Price:</StyledHeader>
                    <StyledText>{props.price}</StyledText>
                </TitleWrapper>

                <TitleWrapper>
                    <StyledHeader>District:</StyledHeader>
                    <StyledText>{props.district}</StyledText>
                </TitleWrapper>

                <TitleWrapper>
                    <StyledHeader>City District:</StyledHeader>
                    <StyledText>{props.cityDistrict}</StyledText>
                </TitleWrapper>
            </TextWrapper>

        </Wrapper>
        <ButtonWrapper>
            <StyledButton onClick={props.backTo4Page}>Previous</StyledButton>
            <StyledButton onClick={props.send}>Submit</StyledButton>
        </ButtonWrapper>
    </StyledWrapper>
)

export default withRouter(LastPage);