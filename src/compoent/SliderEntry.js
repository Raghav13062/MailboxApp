import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './SliderEntry.style';

const SliderEntry = ({data, even, parallax, parallaxProps}) => {
  const {illustration, title, subtitle} = data;

  const renderImage = () => {
    if (parallax) {
      return (
        <ParallaxImage
          source={{uri: illustration}}
          containerStyle={[
            styles.imageContainer,
            even ? styles.imageContainerEven : {},
          ]}
          style={styles.image}
          parallaxFactor={0.35}
          showSpinner={true}
          spinnerColor={
            even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'
          }
          {...parallaxProps}
        />
      );
    }

    return <Image source={{uri: illustration}} style={styles.image} />;
  };

   

  return (
    <View
      activeOpacity={1}
      style={[styles.slideInnerContainer]}
      >
      <View style={styles.shadow} />
      <View
        style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
        {renderImage()}
        <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
      </View>
       
    </View>
  );
};

export default SliderEntry;
