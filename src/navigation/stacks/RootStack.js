import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../../screens/auth/login/Login';
import TwoStepAuthScreen from '../../screens/auth/twoStepAuth/TwoStepAuth';
import Dashboard from '../../screens/dashboardHome/dashboard/Dashboard';

const Stack = createStackNavigator();
const RootStack = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const userInfo = await AsyncStorage.getItem('userInfo');
        const idToken = JSON.parse(userInfo)?.data?.idToken;
        setInitialRoute(idToken ? 'DashboardScreen' : 'Login');
      } catch (error) {
         setInitialRoute('Login'); 
      }
    })();
  }, []);

  if (!initialRoute) {
     return null;
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TwoStepAuth" component={TwoStepAuthScreen} />
      <Stack.Screen name="DashboardScreen" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default RootStack;
