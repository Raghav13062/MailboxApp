import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
   Alert,
 } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mailer from 'react-native-mail'; // Import the mailer package
import DashboardCard from '../../../compoent/DashboardCard';
import styles from './dashboard.style';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Dashboard = ({navigation}) => {
  const [emailCount, setEmailCount] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '970316848550-q3esi8rajvflt6ttubjlh2v2hlvn59ci.apps.googleusercontent.com', // Replace with your actual web client ID
      offlineAccess: true,
    });
  }, []);

  const getUnreadEmailCount = async accessToken => {
    try {
      const response = await fetch(
        'https://gmail.googleapis.com/gmail/v1/users/me/messages?q=is:unread',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        return unreadCount;
      } else {
        console.error('Error fetching emails:', data);
      }
    } catch (error) {
      console.error('Error retrieving unread emails:', error);
    }
  };

  const getAccessToken = async () => {
    try {
      const {accessToken} = await GoogleSignin.getTokens();
      return accessToken;
    } catch (error) {
      console.error('Error getting access token:', error);
      return null;
    }
  };

  const checkTokenScopes = async accessToken => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`,
      );
      const data = await response.json();

      if (data && data.scope) {
        setTokenData(data); // Save the fetched data in state
      } else {
        setError('Token has no scopes or invalid token');
      }
    } catch (error) {
      setError(`Error checking token scopes: ${error.message}`);
    }
  };

  useEffect(() => {
    const accessToken = 'your_access_token_here'; // Replace with your actual access token
    checkTokenScopes(accessToken);
  }, []);

  const getData = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo !== null) {
        const parsedData = JSON.parse(userInfo);
        const accessToken = await getAccessToken(); // Get OAuth access token
        if (accessToken) {
          await getUnreadEmailCount(accessToken);
          await checkTokenScopes(accessToken);
          accessToken;
        } else {
          console.error('Access token is missing');
        }
        return parsedData;
      } else {
        console.log('No data found for key "userInfo"');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
      return null;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userInfo');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.');
    }
  };

  return (
    <View style={styles.container}>
      <DashboardCard />
      <View style={styles.card}>
        <Text style={styles.title}>Inbox Overview</Text>

        <Text style={styles.subtitle}>Total Emails</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
