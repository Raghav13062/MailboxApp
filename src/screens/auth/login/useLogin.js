import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLogin = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '970316848550-q3esi8rajvflt6ttubjlh2v2hlvn59ci.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      // scopes: [
      //   'https://www.googleapis.com/auth/userinfo.email',
      //   'https://www.googleapis.com/auth/gmail.readonly',
      // ], // Add necessary scopes
    });
  }, []);

  const navigation = useNavigation();
  const signin = async () => {
    try {
      // Ensure Google Play Services are available
      await GoogleSignin.hasPlayServices();
      
      // Trigger the sign-in process
      const userInfo = await GoogleSignin.signIn();
      
      // Store user information in AsyncStorage
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      
      // Navigate to TwoStepAuth screen and pass the user information
      navigation.navigate('TwoStepAuth', { userInfo });
      
      // Update the user information state
      setUserInfo(userInfo);
    } catch (error) {
      // Log the error for debugging
      console.log('Error:', error.message);
      
      // Handle specific error cases
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.log('User cancelled the login flow');
          break;
        case statusCodes.IN_PROGRESS:
          console.log('Signing in...');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('Play services not available');
          break;
        default:
          console.log('Some other error occurred:', error);
      }
    }
  };
  
  // const signin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  //     navigation.navigate('TwoStepAuth', {userInfo});
  //     setUserInfo(userInfo);
  //   } catch (error) {
  //     console.log('Error:', error.message);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('User cancelled the login flow');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('Signing in...');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('Play services not available');
  //     } else {
  //       console.log('Some other error occurred:', error);
  //     }
  //   }
  // };

  const signout = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null); // Clear user info on logout
      console.log('User logged out');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return {
    signin,
    signout,
    userInfo, setUserInfo
  };
};

export default useLogin;
