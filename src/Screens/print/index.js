
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import HeaderBack from '../../Component/HeaderBack';
// create a component
const Prrint = ({ props, route, navigation }) => {

  const styles = Styles();

  return (
    <View style={{ flex: 1, backgroundColor: '#FDF3E8' }}>
      <HeaderBack title={'Invoice'} />

      <View style={{ backgroundColor: '#fff', height: '80%', width: '80%', alignSelf: 'center', elevation: 5, borderRadius: 10, marginTop: 20 }} >
        <View style={{ height: responsiveWidth(30), width: responsiveWidth(30), alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', borderRadius: 70, marginTop: 10 }}>
          <Image style={{ height: responsiveWidth(20), width: responsiveWidth(20), }} source={require('../../assets/images/logo.png')} />
        </View>
        <Text style={{ width:'50%',marginLeft:20,marginTop:10 }}>Address usy fsdfsdf skdfy9797,weee</Text>
        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center',  marginTop: 20, justifyContent: 'space-between', borderColor: '#555' }}>
          <Text>Invoice Numberer</Text>
          <Text>#47865894</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center',  marginTop: 15, justifyContent: 'space-between', borderColor: '#555' }}>
          <Text>Bill to</Text>
          <Text>mahesh patra</Text>
        </View>
        <View style={{ flexDirection: 'row',  width: '90%', alignSelf: 'center',  marginTop: 15, justifyContent: 'space-between', borderColor: '#555' }}>
          <Text>School Name</Text>
          <Text>Itahuna sree nara..</Text>
        </View>
        <View style={{ flexDirection: 'row',height:26,borderBottomWidth:1, width: '90%', alignSelf: 'center',  marginTop: 15, justifyContent: 'space-between', borderColor: '#555' }}>
          <Text>Customer Name</Text>
          <Text>mahesh patra</Text>
        </View>
        <View style={{ flexDirection: 'row',height:26,borderBottomWidth:1, width: '90%', alignSelf: 'center',  marginTop: 5, justifyContent: 'space-between', borderColor: '#555' }}>
          <Text>Name</Text>
          <Text>Price</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center',  marginTop: 15, justifyContent: 'space-between', borderColor: '#555' }}>
          <Text>ratan jana</Text>
          <Text>783783</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center',  marginTop: 15, justifyContent: 'space-between', borderColor: '#555' }}>
          <Text>hripada padhy</Text>
          <Text>6875</Text>
        </View>
        <View style={{ flexDirection: 'row',height:26,borderTopWidth:1, width: '90%', alignSelf: 'center',  marginTop: 15, justifyContent: 'space-between', borderColor: '#555' }}>
          <Text>Total</Text>
          <Text>887663</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'80%',alignSelf:'center'}}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',height:45,width:'70%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#01b629',marginTop:15,borderRadius:5,marginBottom:20}} >
            <Text style={{color:'#fff',fontSize:responsiveFontSize(1.9)}}>Download Now</Text>
            <AntDesign style={{ marginLeft:10 }} name='download' color={'#fff'} size={24}  />
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center',height:45,width:'25%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#01b629',marginTop:15,borderRadius:5,marginBottom:20}} >
            
            <AntDesign style={{  }} name='printer' color={'#fff'} size={24}  />
          </TouchableOpacity>

          </View>

      </View>
    </View>
    


  );
};


export default Prrint;
