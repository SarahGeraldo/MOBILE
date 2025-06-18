import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// import styles
import { styles } from "../styles/style";

import { View, TouchableOpacity, Text, TextInput } from "react-native";


// import da página Home
import Home from "./Home";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  function verificarLogin() {
    if (email == "otavio@gmail.com" && password == "meuamor") {
      navigation.navigate("Home")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.interno}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" onChangeText={(value) => setEmail(value)} value={email} />
        <TextInput style={styles.input} placeholder="Password" onChangeText={(value) => setPassword(value)} value={password} />

        <View style={styles.forget}>
          <TouchableOpacity>
            <Text>Forget password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewBtn}>
          <TouchableOpacity onPress={verificarLogin} >
            <Text style={styles.txtDObtn}>👻</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
