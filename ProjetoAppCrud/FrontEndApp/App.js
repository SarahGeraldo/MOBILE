import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de usuário</Text>
      <TextInput style={styles.input} placeholder='Nome' value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder='Senha' value={senha} onChangeText={setSenha} secureTextEntry />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  titule: {
    fontSize: 24,
    fontWeight:
  },
});
