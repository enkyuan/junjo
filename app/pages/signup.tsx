import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import AuthProvider from "../auth.provider";
import tw from "twrnc";

export default function SignUp() {
  const authProvider = AuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <Text
          style={tw`text-4xl 
          font-bold
          pt-20
          pb-20`}
        >
          Sign Up
        </Text>
        <TextInput
          style={tw`border-2 
          rounded-lg 
          w-80 
          h-16 
          pl-4
          mb-4
          text-xl`}
          placeholder="Email"
          value={email}
          placeholderTextColor="gray"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={tw`border-2 
          rounded-lg 
          w-80 
          h-16 
          pl-4
          mb-4
          text-xl`}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          placeholderTextColor="gray"
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={tw`border-2 
          rounded-lg 
          w-80 
          h-16 
          pl-4
          mb-4 
          text-xl`}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={passwordConfirm}
          placeholderTextColor="gray"
          onChangeText={(text) => setPasswordConfirm(text)}
        />
        <Text style={tw`text-xl mb-40 font-semibold`}>
          Have an account?
          <Link href={"/pages/signin"} style={tw`text-blue-500`}>
            {" "}
            Login{" "}
          </Link>
        </Text>
        <Pressable
          style={tw`bg-emerald-400
          w-80
          h-16
          justify-center
          items-center
          rounded-lg`}
          onPress={() =>
            authProvider.handleSignUp(email, password, passwordConfirm)
          }
        >
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
