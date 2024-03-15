import React, { useMemo } from "react";
import { Pressable, View, Text, FlatList } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import tw from "twrnc";

export default function Home() {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <View style={tw`flex-1 p-24 bg-gray-200`}>
      <BottomSheet snapPoints={snapPoints}>
        <FlatList horizontal={true}>
          <Pressable style={tw`bg-gray-400 m-2 rounded-lg`}></Pressable>
          <Pressable></Pressable>
        </FlatList>
      </BottomSheet>
    </View>
  );
}
