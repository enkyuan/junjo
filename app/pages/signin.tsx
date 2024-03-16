import React from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import tw from "twrnc";

export default function SignIn() {
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
          px-8
          mb-4 
          text-xl
          `}
          placeholder="Email"
          placeholderTextColor="gray"
        />
        <TextInput
          style={tw`border-2
          rounded-lg
          w-80
          h-16
          px-8
          mb-4
          text-xl
          align-middle`}
          placeholder="Password"
          placeholderTextColor="gray"
        />
        <Text style={tw`text-xl mb-40 font-semibold`}>
          New?
          <Text style={tw`text-blue-500`}> Register </Text>
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
