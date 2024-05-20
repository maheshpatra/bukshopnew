
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import HeaderBack from '../../Component/HeaderBack';
// create a component
const Profile = ({ props, route, navigation }) => {

  const styles = Styles();

  return (
    <View style={{ flex: 1, backgroundColor: '#FDF3E8' }}>
      <HeaderBack title={'My Profile'} />

      <View style={{height:responsiveWidth(40),width:responsiveWidth(40),alignSelf:'center',backgroundColor:'#ccc',marginVertical:20,borderRadius:responsiveWidth(20),justifyContent:'center',alignItems:'center'}}>
      <Feather name='user' size={responsiveWidth(26)} color={'#555'} style={{}} />
      <FontAwesome5 name='plus' size={24} color={'#fff'} style={{position:'absolute',alignSelf:'flex-end',bottom:0,right:20,backgroundColor:Colors.primary,padding:5,borderRadius:30}} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('MyOrder')} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', alignSelf: 'center', paddingVertical: 15, backgroundColor:'#fff',marginBottom:8}}>
        <FontAwesome5 name='user-alt' size={24} color={Colors.primary} style={{marginLeft:responsiveWidth(8)}} />
        <View style={{marginLeft:responsiveWidth(3)}}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Name</Text>
          <Text style={{ fontFamily: Calibri.regular, fontSize: 18, color: '#000', marginLeft: 10 }}>Mahsh Patra</Text>

        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyOrder')} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', alignSelf: 'center', paddingVertical: 15, backgroundColor:'#fff',marginBottom:8}}>
        <Ionicons name='mail' size={24} color={Colors.primary} style={{marginLeft:responsiveWidth(8)}} />
        <View style={{marginLeft:responsiveWidth(3)}}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Email</Text>
          <Text style={{ fontFamily: Calibri.regular, fontSize: 18, color: '#000', marginLeft: 10 }}>maheshpatra@gmail.com</Text>

        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyOrder')} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', alignSelf: 'center', paddingVertical: 15, backgroundColor:'#fff',marginBottom:8}}>
        <FontAwesome5 name='phone-alt' size={24} color={Colors.primary} style={{marginLeft:responsiveWidth(8)}} />
        <View style={{marginLeft:responsiveWidth(3)}}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Phone Number</Text>
          <Text style={{ fontFamily: Calibri.regular, fontSize: 18, color: '#000', marginLeft: 10 }}>6976757457</Text>

        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyOrder')} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', alignSelf: 'center', paddingVertical: 15, backgroundColor:'#fff',marginBottom:8}}>
        <FontAwesome5 name='lock' size={24} color={Colors.primary} style={{marginLeft:responsiveWidth(8)}} />
        <View style={{marginLeft:responsiveWidth(3),width:'70%'}}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Password</Text>
          <Text style={{ fontFamily: Calibri.regular, fontSize: 18, color: '#000', marginLeft: 10 }}>●●●●●●●●</Text>

        </View>
        <FontAwesome5 name='eye' size={24} color={'#ccc'} style={{marginLeft:responsiveWidth(0)}} />
      </TouchableOpacity>
    </View>
    // <SkeletonPlaceholder >
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={100} alignSelf='center' borderRadius={10} marginTop={30} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />


    // </SkeletonPlaceholder>


  );
};


export default Profile;
