import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

import Home from "./src/pages/Home";
import Login from './src/pages/Login';
import Galeria from './src/pages/Galeria';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="galeria" component={Galeria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
