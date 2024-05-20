
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator,
  Modal
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import Header from '../../Component/Header';
// create a component
const Home = ({ props, route, navigation }) => {

  const styles = Styles();



  return (
    <View style={{ flex: 1,backgroundColor:'#FDF3E8' }}>
      <Header />
      <ScrollView>
        <Text style={{fontSize:responsiveFontSize(2.4),margin:responsiveWidth(2.5),color:'#000',}}> To day Assigned </Text>
       

       <View style={{backgroundColor:'#fff',width:'93%',alignSelf:'center',borderRadius:10,elevation:4,marginBottom:5}}>
       <Text style={{fontSize:responsiveFontSize(2.4),margin:responsiveWidth(2.5),color:'#000',marginLeft:responsiveWidth(4),marginBottom:0,marginTop:responsiveWidth(5)}}>School Name</Text>
       <Text style={{fontSize:responsiveFontSize(2.4),color:'#000',marginLeft:responsiveWidth(4)}}><Ionicons  name="school" color={'#555'} size={responsiveFontSize(2.5)} />  Patna primary school</Text>
       <Text style={{fontSize:responsiveFontSize(2.4),margin:responsiveWidth(2.5),color:'#000',marginLeft:responsiveWidth(4),marginBottom:0}}>Phone Number</Text>
       <Text style={{fontSize:responsiveFontSize(2.4),color:'#000',marginLeft:responsiveWidth(4)}}><Ionicons  name="call" color={'#555'} size={responsiveFontSize(2.5)} />  +91876632346</Text>
       <Text style={{fontSize:responsiveFontSize(2.4),margin:responsiveWidth(2.5),color:'#000',marginLeft:responsiveWidth(4),marginBottom:0}}>Address</Text>
       <Text style={{fontSize:responsiveFontSize(2.4),color:'#000',marginLeft:responsiveWidth(4)}}><Ionicons  name="location" color={'#555'} size={responsiveFontSize(2.5)} />  Patna,hooghly 712149</Text>
       <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('SaleDetails')
            }}>
            <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.2), color: "#fff", fontFamily: Calibri.bold }}>
              SALE NOW
            </Text>
          </TouchableOpacity>
       </View>
        
      </ScrollView>
      
    </View>
    // <SkeletonPlaceholder >
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={200} alignSelf='center' borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={87} alignSelf='center' marginTop={20} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={87} alignSelf='center' marginTop={20}borderRadius={10} />
    //    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between'>
    //    <SkeletonPlaceholder.Item width={100} height={20} marginTop={20} marginLeft={18} />
    //    <SkeletonPlaceholder.Item width={60} height={20} marginTop={20} marginRight={18} />
    //    </SkeletonPlaceholder.Item>
    //    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between'>
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //    </SkeletonPlaceholder.Item>
    //    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between' marginTop={10} borderRadius={10}>
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //    </SkeletonPlaceholder.Item>

    // </SkeletonPlaceholder>


  );
};


export default Home;
