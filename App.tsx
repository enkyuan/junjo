import SignIn from "./src/pages/signin";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import SignUp from "./src/pages/signup";
import Home from "./src/pages/home";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <Home />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
