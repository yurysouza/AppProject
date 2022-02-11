import React from "react";
import {
    PageTitle,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    Avatar,
    WelcomeImage,
    WelcomeContainer,
 } from "../components/styles";

const Welcome = () => { 
    return (
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('../..//assets/LogoMairi/1.png')}/>
                <WelcomeContainer>
                <PageTitle welcome = {true}> Bem Vindo </PageTitle>
                <SubTitle welcome = {true}> @nome </SubTitle>
                <SubTitle welcome = {true}> @emal </SubTitle>

                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('../..//assets/LogoMairi/1.png')}/> 

                        <Line />                        
                        <StyledButton onPress={() =>  {}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>

                    </StyledFormArea>
                </WelcomeContainer>    
            </InnerContainer>
    );
};
export default Welcome;