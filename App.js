import { StatusBar } from 'expo-status-bar';
import Home from './components/Home';
import {Container } from './styles/appStyles';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
const Stack = createStackNavigator();
export default function App() {

  return (
    <>
    <NavigationContainer>
      <StatusBar style="dark"/>
      <Stack.Navigator
      screenOptions={({route}) => ({
        headerShown: false
    })}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
      
    
  );
}


