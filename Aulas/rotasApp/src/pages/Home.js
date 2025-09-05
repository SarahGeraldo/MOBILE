import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

// import styles
import { styles } from "../style/style";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.btnText}>🐟</Text>
      </TouchableOpacity>
    </View>
  );
}
