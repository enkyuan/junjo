import SignIn from "./src/pages/SignIn";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import SignUp from "./src/pages/SignUp";

export default function App() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <SignIn />
      <StatusBar style="auto" />
    </View>
  );
}
