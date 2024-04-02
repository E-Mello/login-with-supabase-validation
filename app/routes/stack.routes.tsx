import Login from "../screens/Login";
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Home from "../screens/Home";

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}