
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import { Picker } from '@react-native-picker/picker';
// create a component
const UploadImage = ({ props, route, navigation }) => {

  const styles = Styles();
  const [verient, setVerient] = useState("")
  const mobile_brands = [
    {
      name: 'Add Box Image',
      image: require('../../assets/images/fdp.png'),
    },

    {
      name: 'Add GST Invoice',
      image: require('../../assets/images/gp.png'),
    }
  ]
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ alignSelf: 'center', width: '92%', backgroundColor: '#fff', marginBottom: 20, borderWidth: 1.5, borderColor: '#ccc', borderRadius: 10, }}>
          <View style={{ flexDirection: 'row' }}>
            <Image resizeMode='center' source={require('../../assets/model/2.png')} style={{ width: responsiveWidth(22), height: responsiveWidth(22), backgroundColor: '#fff', margin: 8, borderRadius: 10, borderWidth: .5, borderColor: '#ccc' }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize: responsiveFontSize(2.5), marginTop: 10, }}>{'Model 1' + verient}</Text>
              <Text style={{ fontFamily: Calibri.regular, color: '#999', fontSize: responsiveFontSize(2.5), }}>{'Get upto'}</Text>
              <Text style={{ fontFamily: Calibri.bold, color: 'red', fontSize: responsiveFontSize(2.5), marginBottom: 15 }}>{'3,400'}</Text>

            </View>

          </View>

        </View>

        <View style={{ width: '100%', height: responsiveWidth(50) }}>
        <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize: responsiveFontSize(2.5), marginBottom: 15,position:'absolute',bottom:'30%',right:'47%' }}>OR</Text>

          <FlatList
            data={mobile_brands}
            contentContainerStyle={{ width: '92%', alignSelf: 'center', justifyContent: 'flex-end', }}
            numColumns={2}
            renderItem={({ item, index }) =>
              <View style={{ height: responsiveWidth(42), width: responsiveWidth(42), marginRight: responsiveWidth(5), justifyContent: 'center', alignItems: 'center', marginLeft: responsiveWidth(1), }}>
                <Text style={{ fontFamily: Calibri.bold, color: 'black', marginVertical: 15, textAlign: 'center' }}>{item.name}</Text>
                <View style={{ height: responsiveWidth(30), width: responsiveWidth(30), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20, borderWidth: .5 }}>

                  <Ionicons name='camera-outline' size={responsiveFontSize(6)} style={{}} />
                </View>
              </View>
            }
          />
        </View>
        <Text style={{ width: '92%', alignSelf: 'center', color: "#555", marginTop: 20, fontFamily: Calibri.bold, marginBottom: 10, fontSize: responsiveFontSize(1.7) }}>
          By clicking continue, you agree with our
          <Text
            onPress={() => navigation.navigate('Main')}
            style={{ color: Colors.primary, marginTop: 10, fontFamily: Calibri.bold }}
          >
            {" "}
            Terms & Conditions
          </Text>
        </Text>
        <TouchableOpacity
          style={{ width: '92%', borderRadius: 8, height: 50, backgroundColor: Colors.primary, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}
          onPress={() => {
            navigation.navigate('Confirm')
          }}>
          <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.2), color: "#fff", fontFamily: Calibri.bold }}>
            Continue
          </Text>
        </TouchableOpacity>
      </ScrollView>


    </View>

    // <SkeletonPlaceholder >
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={responsiveHeight(28)} alignSelf='center' borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={80} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between' marginTop={5} borderRadius={10}>
    //      <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //      <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //     <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //    </SkeletonPlaceholder.Item>
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={70} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={60} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={40} borderRadius={10} />

    //  </SkeletonPlaceholder>


  );
};


export default UploadImage;
