
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import { Picker } from '@react-native-picker/picker';
// create a component
const YourDevice = ({ props, route, navigation }) => {

  const styles = Styles();
  const [verient, setVerient] = useState("")
  const mobile_brands = [
    {
      name: 'Get Instant Payment',
      image: require('../../assets/images/fdp.png'),
    },
    {
      name: 'Free Doorstep Pickup',
      image: require('../../assets/images/gip.png'),
    },
    {
      name: 'Get Instant Payment',
      image: require('../../assets/images/gp.png'),
    }
  ]
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ alignSelf: 'center', width: '92%', backgroundColor: '#fff', marginBottom: 20, borderWidth: 1.5, borderColor: '#ccc', borderRadius: 10, }}>
          <View style={{ flexDirection: 'row' }}>
            <Image resizeMode='center' source={require('../../assets/model/2.png')} style={{ width: responsiveWidth(22), height: responsiveWidth(22), backgroundColor: '#fff', margin: 6, borderRadius: 10, borderWidth: .5, borderColor: '#ccc' }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize: responsiveFontSize(2.5), marginTop: 10, }}>{'Model 1' + verient}</Text>
              <Text style={{ fontFamily: Calibri.regular, color: '#999', fontSize: responsiveFontSize(2.5), }}>{'Get upto'}</Text>
              <Text style={{ fontFamily: Calibri.bold, color: 'red', fontSize: responsiveFontSize(2.5), marginBottom: 15 }}>{'3,400'}</Text>

            </View>

          </View>
          {verient !== '' &&<Picker
          style={{fontFamily:Calibri.bold}}
            fontFamily={Calibri.bold}
            selectedValue={verient}
            onValueChange={(itemValue, itemIndex) =>
              setVerient(itemValue)
            }>
            <Picker.Item label="Your Verient (4GB/64GB)" value="(4GB/64GB)" />
            <Picker.Item label="Your Verient (6GB/128GB)" value="(6GB/128GB)" />
          </Picker>}
          {verient == '' && <View style={{ borderWidth: 1, borderColor: Colors.primary, width: '95%', alignSelf: 'center', marginVertical: 10, padding: 10, borderRadius: 10 }}>
            <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize: responsiveFontSize(2.3), }}>Choose a variant</Text>
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity onPress={() => setVerient('(4GB/64GB)')} style={{ marginRight: 10, width: 120, height: 37, backgroundColor: Colors.primary, borderRadius: 5, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Fontisto name='radio-btn-passive' size={16} color={'#fff'} style={{ backgroundColor: '#fff', borderRadius: 20 }} />
                <Text style={{ marginLeft: 8, fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: '#fff' }}>4GB/64GB</Text>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => setVerient('(6GB/128GB)')} style={{ width: 120, height: 37, backgroundColor: Colors.primary, borderRadius: 5, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Fontisto name='radio-btn-active' size={16} color={'#fff'} style={{ backgroundColor: '#fff', borderRadius: 20 }} />
                <Text style={{ marginLeft: 8, fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: '#fff' }}>6GB/128GB</Text>

              </TouchableOpacity>
            </View>
          </View>}
        </View>
        <View style={{ borderRadius: 10, backgroundColor: '#FF8000', alignSelf: 'center', width: '92%', justifyContent: 'center' }}>
          <Text style={{ color: '#fff', padding: 15, textAlign: 'left', fontFamily: Calibri.regular, lineHeight: 18 }}>The price stated above depends on the condition of the product and is not final. The final price offer will be quoted at the end of this diagnosis.</Text>
        </View>
        <View style={{ width: '100%', height: responsiveWidth(35) }}>
          <FlatList
            data={mobile_brands}
            contentContainerStyle={{ width: '92%', alignSelf: 'center', justifyContent: 'flex-end', marginTop: 20 }}
            numColumns={3}
            renderItem={({ item, index }) =>
              <View style={{ height: responsiveWidth(28), width: responsiveWidth(26), marginRight: responsiveWidth(5), marginBottom: 20, justifyContent: 'center', alignItems: 'center', marginLeft: responsiveWidth(1), }}>
                <Image resizeMode='contain' source={item.image} style={{ width: responsiveWidth(15), height: responsiveWidth(15) }} />
                <Text style={{ fontFamily: Calibri.bold, color: 'black', marginTop: 15, textAlign: 'center' }}>{item.name}</Text>

              </View>
            }
          />
        </View>
        <View style={{ width: '95%', alignSelf: 'center', marginVertical: 10, padding: 10, borderRadius: 10 }}>
          <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize: responsiveFontSize(2.3), }}>Device Specifications:</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ marginRight: 12 }}>
              <Text style={{ fontFamily: Calibri.regular, color: 'black', marginTop: 15, textAlign: 'center' }}>SimCount</Text>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', marginTop: 15, textAlign: 'center' }}>2</Text>

            </View>
            <View style={{ marginRight: 12 }}>
              <Text style={{ fontFamily: Calibri.regular, color: 'black', marginTop: 15, textAlign: 'center' }}>Cores</Text>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', marginTop: 15, textAlign: 'center' }}>8</Text>

            </View>
            <View style={{ marginRight: 12 }}>
              <Text style={{ fontFamily: Calibri.regular, color: 'black', marginTop: 15, textAlign: 'center' }}>BackCamera</Text>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', marginTop: 15, textAlign: 'center' }}>12 MP/20 MP</Text>

            </View>
            <View style={{ marginRight: 12 }}>
              <Text style={{ fontFamily: Calibri.regular, color: 'black', marginTop: 15, textAlign: 'center' }}>Storage</Text>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', marginTop: 15, textAlign: 'center' }}>64 GB/128 GB</Text>

            </View>
            <View style={{ marginRight: 12 }}>
              <Text style={{ fontFamily: Calibri.regular, color: 'black', marginTop: 15, textAlign: 'center' }}>Chipset</Text>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', marginTop: 15, textAlign: 'center' }}>Qualcomm SDM660 Snapdragon 660</Text>

            </View>

          </ScrollView>
        </View>
        <View style={{ width: '95%', alignSelf: 'center', marginVertical: 10, padding: 10, borderRadius: 10, marginBottom: 50 }}>
          <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize: responsiveFontSize(2.3), }}>Check Availability At</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <TextInput
              placeholder='Enter Your Pincode'
              style={{ borderWidth: 1, height: 35, width: '70%', borderColor: '#ccc', paddingLeft: 14, paddingTop: 6 }}
            />
            <TouchableOpacity style={{ width: 100, height: 37, backgroundColor: Colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

              <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: '#fff' }}>CHECK</Text>

            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate('DeviceDetails')} style={{ width: '100%', position: 'absolute', bottom: 0, height: 50, backgroundColor: Colors.primary, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginLeft: 8, fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: '#fff' }}>Get Exact Value </Text>
        <AntDesign name='arrowright' size={20} color={'#fff'} />

      </TouchableOpacity>

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


export default YourDevice;
