import React from "react";
import RootStack from "./src/navigators/RootStack";
import { NavigationContainer } from "@react-navigation/native";
import Events from "./src/screens/Events";
import Search from "./src/screens/Search";
import Login from "./src/screens/Login";
import Maps from "./src/screens/Maps";
import Welcome from "./src/screens/Welcome";

export default function App() {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
}