import React, { useState, FormEvent } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import AuthProvider from "../auth.provider";
import { Link } from "expo-router";
import tw from "twrnc";

export default function SignIn() {
  const authProvider = AuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <Text
          style={tw`text-4xl 
          font-bold
          pt-20
          pb-40`}
        >
          Sign In
        </Text>
        <TextInput
          style={tw`border-2 
          rounded-lg 
          w-80 
          h-16 
          pl-4
          mb-4 
          text-xl
          `}
          maxLength={29}
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
          text-xl
          align-middle`}
          maxLength={20}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          placeholderTextColor="gray"
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={tw`text-xl mb-40 font-semibold`}>
          New?
          <Link href={"/pages/signup"} style={tw`text-blue-500`}>
            {" "}
            Register{" "}
          </Link>
        </Text>
        <Pressable
          style={tw`bg-emerald-400
          w-80
          h-16
          justify-center
          items-center
          rounded-lg`}
          onPress={() => authProvider.handleSignIn(email, password)}
        >
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
