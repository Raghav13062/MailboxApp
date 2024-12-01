import React from 'react';
import {View, ScrollView, Text, StatusBar, SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from './index.style';
import {ENTRIES1, ENTRIES2} from './entries';

const DashboardCard = () => {
  const renderItem = ({item, index}) => {
    return <SliderEntry data={item} even={(index + 1) % 1 === 0} />;
  };

  const renderLightItem = ({item}) => <SliderEntry data={item} even={false} />;

  const layoutExample = (number, title, type) => {
    const isTinder = type === 'tinder';
    return (
      <View>
        <View>
          <Carousel
            data={isTinder ? ENTRIES2 : ENTRIES1}
            renderItem={isTinder ? renderLightItem : renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            containerCustomStyle={styles.slider}
             layout={type}
            title={false}
            loop={true}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={[styles.safeArea,  ]}>
       <View  >
        {layoutExample(3, '"Stack of cards" layout | Loop', 'stack')}
      </View>
    </View>
  );
};

export default DashboardCard;
