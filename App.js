import React, { useEffect, useState } from "react";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { isSignedIn } from "./src/services/security";

export default function App() {
  const Stack = createStackNavigator();

  const [isSigned, setIsSigned] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsSigned(await isSignedIn());

      setIsLoaded(true);
    };

    load();
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isSigned ? "Home" : "Login"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
