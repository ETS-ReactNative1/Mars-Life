import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselViewAnim, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselViewAnim.js';
//import RoverPhotosData from './RoverPhotosData';
import Mars_Image from '../server/Models/Mars_Image.js';
import { dataList } from '../server/Models/Mars_Image';

var beginIdx = 30;

const RoverPhotos = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
 
  //gotta update beginIdx with the refresh button

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={dataList.slice(beginIdx, beginIdx+10)}                         //changed to datalist
        renderItem={CarouselViewAnim}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={dataList.slice(beginIdx, beginIdx+10).length}            //changed to datalist
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#fff'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
     
    </View>

  )
}

export default RoverPhotos

