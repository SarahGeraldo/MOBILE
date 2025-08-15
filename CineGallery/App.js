import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const api = createNativeStackNavigator();

import Home from './src/Home';
import Login from './src/pages/Login';
import Galeria from './src/pages/Galeria';

export default function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  )
}
