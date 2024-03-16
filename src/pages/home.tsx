import React, { useMemo } from "react";
import { Pressable, View, Text, FlatList } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import tw from "twrnc";

export default function Home() {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <View style={tw`flex-1 p-24 bg-gray-200`}>
      <BottomSheet snapPoints={snapPoints}>
        <View style={tw`flex-row justify-evenly h-full px-4`}>
          <Pressable style={tw`bg-gray-200 w-1/2 mr-2 h-32 rounded-2xl`} />
          <Pressable style={tw`bg-emerald-300 w-1/2 ml-2 h-32 rounded-2xl`} />
        </View>
      </BottomSheet>
    </View>
  );
}
