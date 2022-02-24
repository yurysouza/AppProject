import React from "react";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Search from "../screens/Search";
import Events from "../screens/Events";
import Attracts from "../screens/Attracts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyStack() {
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
        backgroundColor: 'transparent'
        },
        headerTransparent: true,
        headerTitle:'',
        headerBackVisible: false
    }}
      >
        <Tab.Screen name= "Attracts"component={Attracts}/>        
        <Tab.Screen name= "Events"component={Events}/>
      </Stack.Navigator>
    );
  }

const RootStack = () => {
    return(
    <Tab.Navigator
      screenOptions={{
          headerStyle:{
              backgroundColor: 'transparent'
          },
          headerTransparent: true,
          headerTitle:'',
          
      }}
      initialRouteName = "Login"
    >
      <Tab.Screen 
      name= "Login" 
      component={Login}/>
      <Tab.Screen 
      name= "Início" 
      component={Welcome}
      options={{
        tabBarLabel: 'Início',
        tabBarIcon:() =>(<FontAwesome name="home" size ={28}/>)
    }}
      />
      <Tab.Screen name= "Busca"
       component={Search}
       options={{
        tabBarLabel: 'Busca',
        tabBarIcon:() =>(<FontAwesome name="search" size ={28}/>)
    }}
       />
      <Tab.Screen name= "Eventos"
      component={MyStack}
      options={{
        tabBarLabel: 'Eventos',
        tabBarIcon:() =>(<FontAwesome name="table" size ={28}/>)
    }}
      />
    </Tab.Navigator>
)
} 

export default RootStack;