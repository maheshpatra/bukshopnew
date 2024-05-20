
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
const Confirm = ({ props, route, navigation }) => {

  const styles = Styles();
 
  return (
     <View style={{ flex: 1,backgroundColor:'#fff' }}>
      <Image source={Images.thank_you} style={{width:'80%',height:200,alignSelf:'center'}}/>
      <Text style={{alignSelf:'center',marginTop:20,fontFamily:Calibri.bold,color:Colors.primary,fontSize:20}}>Thank you for your order!</Text>
      <Text style={{alignSelf:'center',marginTop:10,fontFamily:Calibri.bold,color:'black',fontSize:16}}>We will be in touch with you soon.</Text>
      
    </View>

    // <SkeletonPlaceholder >
    //   <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between' marginTop={5} borderRadius={10}>
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //   </SkeletonPlaceholder.Item>
    //   <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between' marginTop={5} borderRadius={10}>
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //   </SkeletonPlaceholder.Item>
    //   <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between' marginTop={5} borderRadius={10}>
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //   </SkeletonPlaceholder.Item>
    //   <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between' marginTop={5} borderRadius={10}>
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //   </SkeletonPlaceholder.Item>

    // </SkeletonPlaceholder>


  );
};


export default Confirm;
