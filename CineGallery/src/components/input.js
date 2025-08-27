import { TextInput } from "react-native";
import { styles } from "../styles/styles";


export default function InputComp({ textPlaceHolder, password }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={textPlaceHolder}
      placeholderTextColor={"rgb(23, 23, 23)"}
      secureTextEntry={password}
      textAlign="left"
    />
  )
}
