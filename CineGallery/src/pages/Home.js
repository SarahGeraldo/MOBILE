import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Text, TouchableOpacity, View, ImageBackground } from "react-native";

// import styles
import { styles } from "./pages/styles/styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('')} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  );
}
