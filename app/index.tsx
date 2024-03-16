import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import SignUp from "./pages/signup";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <SignUp />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
