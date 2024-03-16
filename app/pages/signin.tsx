import React, { useState, FormEvent } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { useRouter, Link } from "expo-router";
import pb from "../../pb.config";
import tw from "twrnc";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function handleSignIn(email: string, password: string) {
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      router.navigate("/pages/home");
      return authData;
    } catch (error: any) {
      alert(error.message);

      if (error.message.toString() === "failed to authenticate") {
        router.navigate("/pages/signup");
      }
    }
    setLoading(false);
    return isLoading;
  }

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
          onPress={() => handleSignIn(email, password)}
        >
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
