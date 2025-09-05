import { Text, TouchableOpacity } from "react-native";

// IMPORTAÇÃO STYLES:

export default function TouchComponent({ funcClickBTN, txt }) {
  return (
    <TouchableOpacity onPress={funcClickBTN}>
      <Text>{txt}</Text>
    </TouchableOpacity>
  );
}
