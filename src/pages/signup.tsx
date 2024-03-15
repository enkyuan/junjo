import React from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import tw from "twrnc";

export default function SignUp() {
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
          px-8
          mb-4
          text-xl`}
          placeholder="Email"
        />
        <TextInput
          style={tw`border-2 
          rounded-lg 
          w-80 
          h-16 
          px-8
          mb-4
          text-xl`}
          placeholder="Password"
        />
        <TextInput
          style={tw`border-2 
          rounded-lg 
          w-80 
          h-16 
          px-8
          mb-4 
          text-xl`}
          placeholder="Confirm Password"
        />
        <Text style={tw`text-xl mb-40 font-semibold`}>
          Have an account?
          <Text style={tw`text-blue-500`}> Login </Text>
        </Text>
        <Pressable
          style={tw`bg-emerald-400
          w-80
          h-16
          justify-center
          items-center
          rounded-lg`}
        >
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
