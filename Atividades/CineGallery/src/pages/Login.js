import React from "react";
import { useState } from "react";
import { Text, ImageBackground, TextInput, TouchableOpacity, Image, View } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles"

// Quando importamos o useNavigation ele nos retorna uma instância de navegação
// Isso nos prmite acessar todos os métodos referente a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';

import { setItem } from "../components/asyncStorage";

// IMPORT DOS ÍCONES
import AntDesign from '@expo/vector-icons/AntDesign';
import Home from "./Home";

// função para guardar os dados do login
export default function Cadastro() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation()

  // função para redirecionar do login para home
  const verificarLogin = async () => {
    await setItem("login", "1")
    navigation.navigate("home")

    // ?
    if (ConfirmUser == user && ConfirmPassword == password) {
      navigation.navigate("Carrossel")
      setItem("onboarded", "1")
    } else {
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 2000);
    }
  }
  // ?
  return (
    <ImageBackground style={styles.container} source={require("../img/imgDOIS.jpg")} >

      <View style={styles.login}>
        <Text style={styles.txt}>LOGIN</Text>
      </View>

      <TextInput
        style={styles.campo}
        placeholder="Type your user"
        onChangeText={(user) => setUser(user)}
        value={user}
      />
      <TextInput
        style={styles.campo}
        placeholder="Type your password"
        onChangeText={(senha) => setPassword(senha)}
        value={password}
        secureTextEntry={true}
      />

      {visible && <Text style={{ color: "red" }}>ERROR! Invalid user or password </Text>}

      {/* <TouchableOpacity style={styles.paiBTN} onPress={verificarLogin}>
        <Text style={styles.btn}>Enter</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.paiBTN} onPress={verificarLogin} >
        <Text style={styles.btn}>Enter</Text>
      </TouchableOpacity>

    </ImageBackground>
  )
}
