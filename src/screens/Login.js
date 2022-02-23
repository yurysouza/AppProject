import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { GoogleSignin, statusCodes} from "@react-native-google-signin/google-signin";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../..//assets/LogoMairi/1.png')}/>
                <PageTitle>Mairi</PageTitle>
                <SubTitle>Logar com a conta</SubTitle>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}                    
                >
                {({handleChange, handleBlur, handleSubmit, values}) => (
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
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      setUser(userInfo)
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };

export default Login;