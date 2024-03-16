import { Pressable, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";

export default function Payment() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <Text style={tw`text-2xl text-center font-bold`}>Payment Page</Text>
        <Pressable
          style={tw`bg-emerald-400
          w-40
          h-60
          mt-60
          justify-center
          items-center
          rounded-lg`}
          onPress={() => router.navigate("/pages/home")}
        >
          <Feather name="arrow-left-circle" size={64} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
