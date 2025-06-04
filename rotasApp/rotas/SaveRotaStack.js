// EXEMPLO DE ROTA STACK

import React from "react";
import { Text, View } from "react-native";

// import styles:
import { styles } from "../src/style/style";

// import pages:
import Home from "../src/pages/Home";
import About from "../src/pages/About";

import { NavigationContainer } from "@react-navigation/native";
// navigation fornece o componente que vai envolver a navegação

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// "createNativeStackNavigator" importa as funções da Rota Stack

const Stack = createNativeStackNavigator();
// esse const engloba os imports "navigation" e "createNativeStackNavigator"

export default function App() {
  // "NavigationContainer" é o pai da navegação
  // "Stack.Navigator"  gerencia as páginas
  // "Stack.Screen" define quantas telas existirão, gerencia as telas

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
