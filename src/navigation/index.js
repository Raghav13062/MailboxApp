import {NavigationContainer} from '@react-navigation/native';
 import RootStack from './stacks/RootStack';
 
const Route  = () => {
  return (
    <NavigationContainer >
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
