import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { useRouter, Link } from "expo-router";
import pb from "../../pb.config";
import tw from "twrnc";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  function isValidEmail(email: string) {
    const emailRegex = new RegExp("/^[a-zA-Z][0-9]{7}@students.katyisd.org$/");
    if (emailRegex.test(email) === false) {
      alert("Invalid email");
      return false;
    }

    return true;
  }

  function isValidPassword(password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }

    return true;
  }

  async function handleSignUp(email: string, password: string) {
    if (isValidEmail(email) && isValidPassword(password, confirmPassword)) {
      setLoading(true);
      try {
        const authData = await pb
          .collection("users")
          .authWithPassword(email, password);
        router.navigate("/pages/home");
        return authData;
      } catch (error: any) {
        alert(error.message);
      }
      setLoading(false);
      return isLoading;
    }
  }

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
          pl-4
          mb-4
          text-xl`}
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
          text-xl`}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          placeholderTextColor="gray"
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={tw`border-2 
          rounded-lg 
          w-80 
          h-16 
          pl-4
          mb-4 
          text-xl`}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          placeholderTextColor="gray"
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Text style={tw`text-xl mb-40 font-semibold`}>
          Have an account?
          <Link href={"/pages/signin"} style={tw`text-blue-500`}>
            {" "}
            Login{" "}
          </Link>
        </Text>
        <Pressable
          style={tw`bg-emerald-400
          w-80
          h-16
          justify-center
          items-center
          rounded-lg`}
          onPress={() => handleSignUp(email, password)}
        >
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
