
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
// create a component
const Model = ({ props, route, navigation }) => {

  const styles = Styles();
  const mobile_brands = [
    {
      name: 'Model 1',
      image: require('../../assets/model/1.png'),
    },
    {
      name: 'Model 2',
      image: require('../../assets/model/2.png'),
    },
    {
      name: 'Model 3',
      image: require('../../assets/model/3.png'),
    },
    {
      name: 'Model 4',
      image: require('../../assets/model/4.png'),
    }, {
      name: 'Model 5',
      image: require('../../assets/model/5.png'),
    }, {
      name: 'Model 6',
      image: require('../../assets/model/6.png'),
    }
  ]
  return (
     <View style={{ flex: 1 }}>
      <FlatList
        data={mobile_brands}
        contentContainerStyle={{ width: '92%', alignSelf: 'center', justifyContent: 'flex-end',marginTop:10 }}
        numColumns={3}
        renderItem={({ item, index }) =>
          <TouchableOpacity onPress={()=>navigation.navigate('YourDevice')} style={{ height: responsiveWidth(26), width: responsiveWidth(26), backgroundColor: '#fff', marginRight: responsiveWidth(5), marginBottom: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: '#ccc', borderRadius: 10, marginLeft: responsiveWidth(1) }}>
            <Image resizeMode='contain' source={item.image} style={{ width: responsiveWidth(15), height: responsiveWidth(15) }} />
            <Text style={{ fontFamily: Calibri.bold, color: 'black', marginTop: 5 }}>{item.name}</Text>

          </TouchableOpacity>
        }
      />
    </View>
    
    // <SkeletonPlaceholder >
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={160} alignSelf='center' borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={20} borderRadius={10} />
      
     
      

    // </SkeletonPlaceholder>


  );
};


export default Model;
