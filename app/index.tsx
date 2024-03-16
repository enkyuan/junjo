import React from "react";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <SignIn />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
