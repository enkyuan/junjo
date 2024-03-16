import React, { useMemo } from "react";
import { Pressable, View, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Ionicons as IonicIcons, Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { Card } from "react-native-paper";

export default function Home() {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <View style={tw`flex-1 p-24 bg-gray-200`}>
      <BottomSheet snapPoints={snapPoints}>
        <BottomSheetView style={tw`flex-1 bg-white`}>
          <View style={tw`items-center justify-between px-4 mt-4`}>
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
                <Text style={tw`text-3xl font-bold items-start pt-4 pl-4`}>
                  Pay
                </Text>
                <View style={tw`items-end`}>
                  <Feather
                    name="arrow-right-circle"
                    size={80}
                    color="black"
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
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
