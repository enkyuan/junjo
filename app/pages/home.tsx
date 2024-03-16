import React, { useMemo } from "react";
import { Pressable, View, Text } from "react-native";
import { Card } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { Ionicons, Feather } from "@expo/vector-icons";
import pb from "../../pb.config";
import tw from "twrnc";

export default function Home() {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <GestureHandlerRootView style={tw`flex-1 p-24 bg-gray-200`}>
      <View style={tw`flex-1 items-start justify-start`}>
        <Pressable style={tw`pt-32`} onPress={() => pb.authStore.clear()}>
          <Ionicons name="exit-outline" size={64} color="black" />
        </Pressable>
      </View>
      <BottomSheet snapPoints={snapPoints}>
        <View style={tw`flex-1 items-center justify-between px-4 mt-4`}>
          <View style={tw`flex-row justify-between`}>
            <Pressable
              style={tw`bg-gray-200 w-2/5 mr-4 h-32 rounded-3xl items-end justify-end`}
            >
              <Feather
                name="bookmark"
                size={64}
                color="black"
                style={tw`mr-4 mb-4`}
              />
            </Pressable>
            <Pressable
              style={tw`bg-emerald-300 w-1/2 ml-4 h-36 rounded-3xl justify-between`}
            >
              <Text
                style={tw`text-3xl text-white font-bold items-start pt-4 pl-4`}
              >
                Pay
              </Text>
              <View style={tw`items-end`}>
                <Feather
                  name="arrow-right-circle"
                  size={80}
                  color="white"
                  style={tw`mr-4 mb-4`}
                />
              </View>
            </Pressable>
          </View>
          <Card
            style={tw`m-8 w-full h-40 rounded-3xl justify-start bg-white shadow-none`}
          >
            <Card.Content>
              <Text style={tw`text-4xl text-center font-semibold`}>
                Location
              </Text>
            </Card.Content>
          </Card>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
