import React, { useMemo } from "react";
import { Pressable, View, Text } from "react-native";
import { Card } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import pb from "../../pb.config";
import tw from "twrnc";

export default function Home() {
  const router = useRouter();
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  async function handleSignOut() {
    pb.authStore.clear();
    router.navigate("/pages/signin");
  }

  return (
    <GestureHandlerRootView style={tw`flex-1 bg-gray-200`}>
      <BottomSheet snapPoints={snapPoints} style={tw`rounded-3xl`}>
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
              style={tw`bg-emerald-400 w-1/2 ml-4 h-36 rounded-3xl justify-between`}
              onPress={() => router.navigate("/pages/payment")}
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
          <View style={tw`flex-col justify-between items-center py-8`}>
            <Card style={tw`h-1/3 w-88 rounded-3xl bg-white shadow-none`}>
              <Card.Content>
                <Text
                  style={tw`inline-block text-2xl text-center align-middle font-semibold`}
                >
                  Pick a spot to get started
                </Text>
              </Card.Content>
            </Card>
            <Pressable
              style={tw`w-full h-1/2 rounded-full bg-white`}
              onPress={() => handleSignOut()}
            >
              <Text style={tw`text-3xl text-red-500 font-semibold`}>
                Log Out
              </Text>
            </Pressable>
          </View>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
