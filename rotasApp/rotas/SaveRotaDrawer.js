import React from "react";
import { Text, View } from "react-native";

// import styles:
import { styles } from "./src/style/style";

// import icon
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// import pages:
import Home from "./src/pages/Home";
import About from "./src/pages/About";

import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

/* alterações do RotaStack para o RotaDrawer:
- apagou o "createNativeStackNavigator"
- acrescentou o "createDrawerNavigator" para importar as funções da rota Drawer
- mudou a const "Stack" para "Drawer"
- dentro do "NavigationContainer" mudou o "Stack" para "Drawer"
*/

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "#0015A1",
          headerTintTitle: "#0015A1",
          drawerStyle: { backgroundColor: "#0015A1" }, // cor de fundo do menu
          drawerActiveBackgroundColor: "#fff", // cor de fundo da aba ativa
          drawerActiveTintColor: "#0015A1", // cor da letra da aba ativa
          drawerInactiveBackgroundColor: "#0015A1", // cor de fundo da aba inativa
          drawerInactiveTintColor: "#fff", // cor da letra da aba inativa
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => {
              return <AntDesign name="home" size={24} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="newspaper-variant-outline"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
