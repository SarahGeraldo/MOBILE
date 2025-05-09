import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  // Button,
  TouchableOpacity, // forma de capiturar o click com maior estilização
} from "react-native";

export default function App() {
  const ChangeText = () => {
    console.log("HELLO");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/img/PA2.jpg")}
      resizeMode="cover" // adaptação da imagem na tela
    >
      <Text style={styles.text}>Good </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        secureTextEntry={true}
        placeholderTextColor="white"
        inputMode={"numeric"}
        autoCapitalize="characters"
        multiline={true}
        onChangeText={ChangeText}
      />
      {/* <Button
        title="click me!"
        color="#ff0000"
        onPress={() => alert("You click on button")}
      /> */}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtBtn}>click me! </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(107, 115, 53)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "#000",
  },
  input: {
    color: "rgb(236, 87, 170)",
    width: 300,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "fff",
  },
  image: {
    width: "50%",
    height: "20%",
    borderRadius: 80,
  },
  btn: {
    width: 100,
    padding: 10,
    backgroundColor: "transparent",
    color: "rgb(236, 87, 170)",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgb(236, 87, 170)",
  },
  txtBtn: {
    color: "rgb(236, 87, 170)",
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

  /* EXEMPLO QUATRO: 
  
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
  }, */
});

{
  /* <View style={styles.container}>*/
}
{
  /* EXEMPLO UM: */
}

{
  /* {[GRUPO, {LINHA}]}: */
}
{
  /* <View style={(styles.ex1, { backgroundColor: "pink" })}></View> */
}

{
  /* ----------------------------------------------------------- */
}
{
  /* {GRUPO}: */
}
{
  /* <Text style={styles.ex2}>HELLO</Text> */
}

{
  /* ----------------------------------------------------------- */
}
{
  /* {{LINHA}}: */
}
{
  /* <Text style={{ color: "green", fontSize: 33 }}>BYE</Text> */
}

{
  /* ----------------------------------------------------------- */
}
{
  /* {{MULTIPLOS GRUPOS}}: */
}
{
  /* <View style={[styles.ex4, styles.card]}></View> */
}

{
  /* ----------------------------------------------------------- */
}
{
  /* EXEMPLO DOIS: */
}

{
  /* <View style={styles.container}>
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
      <StatusBar style="auto" /> */
}

{
  /* ----------------------------------------------------------- */
}
{
  /* EXEMPLO TRÊS: */
}

{
  /* <View style={styles.container}>
        <TextInput style={styles.input1} />
        <TextInput style={styles.input2} />
      </View>
    </View> */
}

{
  /* ----------------------------------------------------------- */
}
{
  /* EXEMPLO QUATRO: */
}

/*     <View style={[styles.container, { backgroundColor: "rgb(107, 115, 53)" }]}>
      <Text style={styles.text}>Good </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        secureTextEntry={true}
        placeholderTextColor="white"
        inputMode={"numeric"}
        autoCapitalize="characters"
        multiline={true}
        onChangeText={ChangeText}
      />

      <Image
        source={require("./src/assets/img/PA2.jpg")}
        style={styles.image}
      />
    </View>
    */

// -----------------------------------------

/*
      btn: {
    width: 100,
    padding: 10,
    backgroundColor: "transparent",
    color: "rgb(236, 87, 170)",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgb(236, 87, 170)",
  },
  */
