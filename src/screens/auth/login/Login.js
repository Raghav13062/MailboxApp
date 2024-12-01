import React  from 'react';
import {
   View,
  Image,
  Text,
   TouchableOpacity,
} from 'react-native';
import styles from './login.style';
import useLogin from './useLogin';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const {signin, signout, userInfo, setUserInfo} = useLogin();

  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.signInContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
            }}  
            style={styles.logo}
          />
          <Text style={styles.heading}>Welcome to Our App</Text>
          <Text style={styles.subHeading}>
            Sign in to unlock exclusive features and start exploring.
          </Text>
          <TouchableOpacity style={styles.googleSignInButton} onPress={signin}>
            <Text style={styles.googleSignInText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
        
     </SafeAreaView>
  );
};

export default Login;
