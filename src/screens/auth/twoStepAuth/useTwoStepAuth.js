import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

const useTwoStepAuth = () => {
  const navigation = useNavigation();
  const [showWebView, setShowWebView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleEnableTwoStep = () => {
    setShowWebView(true);
  };

  const handleNextStep = () => {
    setShowWebView(false);
    navigation.navigate('DashboardScreen');
  };

  return {
    showWebView,
    setShowWebView,
    isLoading,
    setIsLoading,
    handleEnableTwoStep,
    handleNextStep,
  };
};

export default useTwoStepAuth;
