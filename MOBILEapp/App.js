import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      {/* EXEMPLO UM: */}

      {/* {[GRUPO, {LINHA}]}: */}
      {/* <View style={(styles.ex1, { backgroundColor: "pink" })}></View> */}

      {/* ----------------------------------------------------------- */}
      {/* {GRUPO}: */}
      {/* <Text style={styles.ex2}>HELLO</Text> */}

      {/* ----------------------------------------------------------- */}
      {/* {{LINHA}}: */}
      {/* <Text style={{ color: "green", fontSize: 33 }}>BYE</Text> */}

      {/* ----------------------------------------------------------- */}
      {/* {{MULTIPLOS GRUPOS}}: */}
      {/* <View style={[styles.ex4, styles.card]}></View> */}

      {/* ----------------------------------------------------------- */}
      {/* EXEMPLO DOIS: */}

      {/* <View style={styles.container}>
        <View style={styles.card}>
          <text>Card1</text>
        </View>

        <View style={styles.card}>
          <text>Card2</text>
        </View>

        <View style={styles.card}>
          <text>Card3</text>
        </View>
      </View>
      <StatusBar style="auto" /> */}

      {/* ----------------------------------------------------------- */}
      {/* EXEMPLO TRÊS: */}

      <View style={styles.container}>
        <TextInput style={styles.input1} />
        <TextInput style={styles.input2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(107, 115, 53)",
    alignItems: "center",
    justifyContent: "center",
  },

  /* ex2: {
     color: "yellow",
     textShadowColor: "black",
     textShadowOffset: { width: 2, height: 2 },
     textShadowRadius: 50,
     fontSize: 33,
     fontWeight: "bold",
   },*/

  /* card: {
    width: 250,
    height: 300,
    backgroundColor: "yellow",
  }, */

  input1: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#fff",
    padding: 10,
    width: 250,
  },

  input2: {
    borderWidth: 0,
    textAlign: "center",
    marginTop: 50,
    width: 250,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
