import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Formik } from "formik";
import {Colors,
    PageTitle,
    InnerContainer,
    StyledContainer,
    SubTitle,
    StyledFormArea,
    PageLogo,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    Line,
    LeftIcon
 } from "../components/styles";
import { View } from "react-native";


GoogleSignin.configure({
    webClientId: '1040660382322oi4dlvqfv26sfndgm856g7lh45jq2t5h.apps.googleusercontent.com', 
    accountName: '',
    profileImageSize: 120
});

const {primary, darkLight, brand} = Colors;
const Test = () => {
    
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../..//assets/LogoMairi/1.png')}/>
                <PageTitle>Mairi</PageTitle>
                <SubTitle>TELA DE TESTES</SubTitle>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}                    
                >
                {({handleChange,handleBlur,handleSubmit ,values}) => (
                    <StyledFormArea>
                        <MyTextInput
                            label = "endereço de email"
                            icon = "user"
                            placeholder = "yury@ufpa.icen.br"
                            placeholderTextColor = {darkLight}
                            placeholderText
                            onChangeText = {handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType = "email-address"
                        />
                        <MyTextInput
                            label = "password"
                            icon = "lock"
                            placeholder = "* * * * * * *"
                            placeholderTextColor = {darkLight}                        
                            onChangeText = {handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry = {true}
                        />
                        <StyledButton onPress = {handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton google = {true} onPress = {signIn}>
                            <FontAwesome name= "google" size = {25} color ={primary}/>
                            <ButtonText google = {true}> Continue com Google </ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, ...props}) => {
    return (<View>
        <LeftIcon>
            <Icon name= {icon} size = {25} color ={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
    </View>);
};

const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      console.log(userInfo);
    } catch (error) {
        console.log('play services are not available');
    }
};
export default Test;