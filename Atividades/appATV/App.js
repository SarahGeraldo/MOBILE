import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import pages
import Home from "./src/pages/Home";
import Login from "./src/pages/Login"
import { styles } from "./src/styles/style";

const Drawer = createDrawerNavigator();
export default function App() {

  return (
    <NavigationContainer style={styles.container} >
      <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


