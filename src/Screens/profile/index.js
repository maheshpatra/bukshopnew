
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
const Profile = ({ props, route, navigation }) => {

  const styles = Styles();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontFamily: Calibri.bold, fontSize: 20, marginLeft: responsiveFontSize(2.5), marginTop: 20 }}>Profile</Text>
      <View style={{ height: 100, backgroundColor: '#000', width: '91%', alignSelf: 'center', borderRadius: 10, marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: 20, color: '#fff' }}>Hello!</Text>
          <Text style={{ fontFamily: Calibri.regular, fontSize: 17, color: '#fff' }}>Kalvin smith</Text>
          <Text style={{ padding: 3, color: '#fff', backgroundColor: Colors.primary, textAlign: 'center', width: 60, margin: 3, borderRadius: 5, fontFamily: Calibri.bold, fontSize: 12 }}>Edit</Text>
        </View>
        <Text style={{ padding: 3, backgroundColor: '#fff', color: Colors.primary, textAlign: 'center', width: 80, margin: 3, borderRadius: 5, fontFamily: Calibri.bold, marginRight: 20, fontSize: 18 }}>Logout</Text>
      </View>
      {/* pages  PrivacyPolicy*/}
      <TouchableOpacity onPress={()=>navigation.navigate('MyOrder')} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 15, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
        <Image source={Images.myorder} style={{ height: 40, width: 40 }} />
        <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('AboutUs')} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
        <Image source={Images.aboutus} style={{ height: 40, width: 40 }} />
        <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('PrivacyPolicy')} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
        <Image source={Images.privacypolicy} style={{ height: 40, width: 40 }} />
        <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Tearms')} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
        <Image source={Images.tearmscondition} style={{ height: 40, width: 40 }} />
        <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Tearms & Conditions</Text>
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
