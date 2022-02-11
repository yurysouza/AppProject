import React from "react";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Search from "../screens/Search";
import Maps from "../screens/Maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen name= "Login" component={Login}/>
        <Stack.Screen name= "Welcome" component={Welcome}/>
        <Stack.Screen name= "Search" component={Search}/>
        <Stack.Screen name= "Maps" component={Maps}/>
      </Stack.Navigator>


  )
}

export default RootStack;