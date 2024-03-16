import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { useRouter, Link } from "expo-router";
import pb from "../../pb.config";
import tw from "twrnc";

export default function SignUp() {
  const router = useRouter();
  const nameRegex = new RegExp("/^[a-zA-Z][0-9]{7}/");
  const emailRegex = new RegExp("^[a-zA-Z][0-9]{7}@students.katyisd.org$");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function isValidEmail(email: string) {
    if (emailRegex.test(email) === true) {
      return true;
    }

    alert("Invalid email");
    console.log(email);

    return false;
  }

  function isValidPassword(password: string, passwordConfirm: string) {
    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return false;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }
    console.log(password, passwordConfirm);

    return true;
  }

  async function handleSignUp(email: string, password: string) {
    const username = nameRegex.exec(email);
    const data = {
      email: email,
      username: username,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    if (isValidEmail(email) && isValidPassword(password, passwordConfirm)) {
      try {
        await pb.collection("users").create(data);
        router.navigate("/pages/home");
      } catch (error: any) {
        alert(error.message);
      }
    }

    console.log(username, data);
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
          value={passwordConfirm}
          placeholderTextColor="gray"
          onChangeText={(text) => setPasswordConfirm(text)}
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
