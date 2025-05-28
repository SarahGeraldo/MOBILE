// IMPORT
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  // CONST
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // imprimir imc
  function calcIMC(peso, altura) {
    const IMC = peso / (altura * altura);
    return IMC;
  }

  // contar imc
  function IMC() {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
      return <Text>abaixo do peso</Text>;
    } else if (imc <= 25) {
      return <Text>com peso ideal</Text>;
    } else if (imc <= 30) {
      return <Text>acima do peso</Text>;
    } else {
      return <Text>obeso</Text>;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.txt}>
        <TextInput
          // ESCREVER peso
          placeholder="Digite seu peso em kg"
          value={peso}
          onChangeText={(value) => setPeso(value)}
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderColor: "#000",
            fontSize: 20,
          }}
        />

        <TextInput
          // ESCREVER altura
          placeholder="Digite sua altura em metros"
          value={altura}
          onChangeText={(value) => setAltura(value)}
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderColor: "#000",
            fontSize: 20,
          }}
        />

        {/* FUNÇÃO PARA O NOME APARECER EM UMA FRASE */}
        {/* {nome ? (
        <Text style={{ color: "#000" }}>Bom dia {nome}, seja bem-vindo!</Text>
      ) : null} */}

        <Button
          title="Calcular IMC"
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>

      {/* MODAL (TELA QUE FORÇA A VISUALIZAÇÃO) */}
      {/* anúncio que tem que fechar */}
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* contar imc */}
            {peso && altura ? (
              <Text style={{ fontSize: 20 }}>Você está {IMC()}</Text>
            ) : null}
            {/* imprimir imc */}
            <Text style={{ fontSize: 15 }}>{calcIMC(peso, altura)}</Text>
            <Button
              title="Ocultar resultados"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5FFCC",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 200,
    paddingLeft: 600,
    paddingRight: 600,
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5FFCC",
  },

  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "green",
    borderRadius: 20,
    alignItems: "center",
  },

  txt: {
    width: "90%",
    backgroundColor: "green",
    alignItems: "center",
  },
});
