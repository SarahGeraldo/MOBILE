import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, ImageBackground, Pressable } from "react-native";

// import styles
import { styles } from "../styles/styles";

// import navigation
import { useNavigation } from '@react-navigation/native';
import { removeItem } from "../components/asyncStorage";

export default function Home() {

  const Navigation = useNavigation();

  // função para redirecionar do home para galeria
  const verificarHome = async () => {
    Navigation.navigate("galeria");
  }

  const logout = async () => {
    await removeItem("login");
    Navigation.navigate("login")
  }

  return (
    <ImageBackground style={styles.container} source={require("../img/imgTRES.jpg")}>
      <Text style={styles.txt} >Welcome to CineGallery</Text>
      <TouchableOpacity style={styles.BTNmovies} onPress={verificarHome}>
        <Text style={styles.txt} >Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BTNlogout} onPress={logout}>
        <Text style={styles.txt} >Logout</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
