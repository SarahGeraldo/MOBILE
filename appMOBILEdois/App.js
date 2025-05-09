import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TouchableOpacity } from "react-native";

// IMPORTAÇÃO STYLES:
import { styles } from "./src/style/styles.js";

// IMPORTAÇÃO SecondComponent:
import { SecondComponent } from "./src/components/SecondComponent.js";

// IMPORTAÇÃO TouchComponent:
import TouchComponent from "./src/components/TouchComponent.js";

export default function App() {
  const saveBTN = () => {
    alert("Save!");
  };

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <TouchComponent txt="Salvar" funcClickBTN={saveBTN} />
    </View>
  );
}
