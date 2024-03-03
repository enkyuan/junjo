import Home from "./src/pages/Home";
import SignIn from "./src/pages/SignIn";
import Signup from "./src/pages/SignUp";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`flex-1 items-center jusify-center`}>
      <StatusBar style="auto" />
    </View>
  );
}
