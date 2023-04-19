import Home from "./src/Components/Home/home";
import CakesList from "./src/Components/CakesComp/CakesList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CakeDetail from "./src/Components/CakesComp/CakeDetail";
import { Provider } from "react-redux";
import { store } from './src/Components/Redux/Store'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          ></Stack.Screen>
          <Stack.Screen name="CakesList" component={CakesList}></Stack.Screen>
          <Stack.Screen name="CakeDetail" component={CakeDetail}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
