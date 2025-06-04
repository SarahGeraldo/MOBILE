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

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* alterações do RotaDrawer para o RotaTab:
- apagou o "createDrawerNavigator"
- acrescentou o "createBottomTabNavigator" para importar as funções da rota Drawer
- mudou a const "Drawer" para "Tab"
- dentro do "NavigationContainer" mudou o "Drawer" para "Tab"
*/

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveBackgroundColor: "#fff",
          tabBarActiveTintColor: "#0015A1",
          tabBarStyle: {
            backgroundColor: "#0015A1",
            height: 50,
            position: "absolute",
            bottom: 50,
            borderRadius: 20,
            borderTopColor: "transparent",
            padding: 10,
            shadowColor: "#0015A1",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
            width: "80%",
            // left: "10%",
            // right: "10%",
            marginHorizontal: "10%",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="home" size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color, size }) => {
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
