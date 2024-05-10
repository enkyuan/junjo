import React from "react";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StripeProvider } from "@stripe/stripe-react-native";

require("dotenv").config({ path: "../../junjo/server/.env" });

export default function App() {
  return (
    <StripeProvider publishableKey={process.env.STRIPE_KEY!}>
      <GestureHandlerRootView style={tw`flex-1`}>
        <SignIn />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </StripeProvider>
  );
}
