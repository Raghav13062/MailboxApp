import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from 'react-native';
import WebView from 'react-native-webview';
import styles from './twoStepAuth.style';
import useTwoStepAuth from './useTwoStepAuth';

const TwoStepAuthScreen = () => {
  const {
    showWebView,
     isLoading,
    setIsLoading,
    handleEnableTwoStep,
    handleNextStep,
  } = useTwoStepAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Two-Step Authentication</Text>
        <Text style={styles.subtitle}>
          Protect your account with an extra layer of security.
        </Text>
      </View>

      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
          }} // Replace with your app logo path
          style={styles.logo}
        />
        <Text style={styles.instructions}>
          Enable two-step authentication to secure your account. This adds an
          additional verification step whenever you log in.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleEnableTwoStep}>
          <Text style={styles.buttonText}>Enable Two-Step Authentication</Text>
        </TouchableOpacity>
      </View>

      {showWebView && (
        <Modal visible={showWebView} animationType="slide">
          <SafeAreaView style={styles.modalContainer}>
            {isLoading && (
              <ActivityIndicator
                size="large"
                color="#007BFF"
                style={styles.loader}
              />
            )}
            <WebView
              source={{uri: 'https://myaccount.google.com/security-checkup'}}
              onLoadEnd={() => setIsLoading(false)}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleNextStep}>
              <Text style={styles.closeButtonText}>Done</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default TwoStepAuthScreen;
