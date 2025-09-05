import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createComponentForStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Galeria from "../pages/Galeria";
import { getItem } from "./asyncStorage"

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showLogin, setShowLogin] = useState(null)

  useEffect(() => {
    checkIfAlreadyLogin();
  }, [])

  const checkIfAlreadyLogin = async () => {
    let Login = await getItem('Login')

    if (Login === 1) {
      setShowLogin(false)
    } else {
      setShowLogin(true)
    }
  }

  if (showLogin === null) {
    return null
  }

  if (showLogin) {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="galeria" component={Galeria} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer >
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="galeria" component={Galeria} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
