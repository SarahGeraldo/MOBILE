import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

// import styles
import { styles } from "../style/style";
import { useNavigation } from "@react-navigation/native";

export default function About() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text>About</Text> */}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnWall}>🐳</Text>
      </TouchableOpacity>
    </View>
  );
}
