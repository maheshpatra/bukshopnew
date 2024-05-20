
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import { SwipeListView } from 'react-native-swipe-list-view';
import Header from '../../Component/Header';
// create a component
const Return = ({ props, route, navigation }) => {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSchool, setSelectedSchool] = useState();
  const [select, setSelected] = useState();
  const listViewData = [
    {
      name: 'Anil Jana',
      school: 'Delhi  public school',
      address: 'St 22455448',
      number: '945712457',
      returnamount: '₹250',
      price: '₹1250'
    },
    {
      name: 'Anil Jana',
      school: 'Delhi  public school',
      address: 'St 22455448',
      number: '945712457',
      returnamount: '₹250',
      price: '₹1250'
    },
    {
      name: 'Anil Jana',
      school: 'Delhi  public school',
      address: 'St 22455448',
      number: '945712457',
      returnamount: '₹250',
      price: '₹1250'
    }
  ]
  const styles = Styles();

  return (
    <View style={{ flex: 1, backgroundColor: '#FDF3E8' }}>
      <Header />
      <ScrollView>
        <View style={{ width: '95%', backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 6, elevation: 5, marginBottom: 10 }}>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: responsiveWidth(12.5) }}>
            <TextInput cursorColor={Colors.primary} placeholder='Invoice Number' placeholderTextColor={'#ccc'} style={{ paddingLeft: 15, color: '#555' }} />
          </View>
          
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 10, height: responsiveWidth(12.5), backgroundColor: '#fff' }}>

           
            <View style={{ width: '100%', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: 45 }}>
              <TextInput cursorColor={Colors.primary} placeholder='Student name' placeholderTextColor={'#ccc'} style={{ paddingLeft: 15, color: '#555' }} />

            </View>
          </View>

        
        
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 10, height: responsiveWidth(12.5), backgroundColor: '#fff' }}>

           
            <View style={{ width: '100%', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: 45 }}>
              <TextInput cursorColor={Colors.primary} placeholder='Phone Number' placeholderTextColor={'#ccc'} style={{ paddingLeft: 15, color: '#555' }} />

            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Main')
            }}>
            <Text style={{ fontSize: responsiveFontSize(2.5), color: "#fff", fontFamily: Calibri.regular }}>
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:responsiveWidth(4),width:'90%',alignSelf:'center',alignItems:'center',marginVertical:10}}>
        
        <Text style={{ fontSize: responsiveFontSize(2), color: '#000', }}> Total Qty: 100</Text>
             <View>
             <Text style={{ fontSize: responsiveFontSize(2), color: '#000',  }}> Total Qty</Text>
             <Text style={{ fontSize: responsiveFontSize(2), color: 'green',fontWeight:'bold'  }}> 345433</Text>
             

             </View>
        </View>
            

        <SwipeListView
          data={listViewData}
          renderItem={(data, rowMap) => (
            <TouchableOpacity onPress={()=>navigation.navigate('ReturnDetails')} style={{ backgroundColor: '#fff', width: '100%', alignSelf: 'center', marginBottom: 7, padding: 12 }}>
              <Text style={{ fontSize: responsiveFontSize(2.2), color: '#000', marginLeft: responsiveWidth(4) }}>  {" " + data.item.school + " "}</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:responsiveWidth(4),width:'95%'}}>
              <Text style={{ fontSize: responsiveFontSize(2.2), color: '#000', }}> {" " + data.item.name}</Text>
              <Text style={{ fontSize: responsiveFontSize(2.7), color: Colors.primary,  }}> {data.item.price}</Text>

              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:responsiveWidth(4),width:'95%'}}>
              <Text style={{ fontSize: responsiveFontSize(2.2), color: '#000', }}> {" " + data.item.address}</Text>
              <Text style={{ fontSize: responsiveFontSize(1.8), color: 'green',fontWeight:'bold'  }}> 10% OFF</Text>
              <Text style={{ fontSize: responsiveFontSize(1.7), color: '#000',  }}> Cash</Text>

              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:responsiveWidth(4),width:'95%'}}>
              <Text style={{ fontSize: responsiveFontSize(2.2), color: '#000', }}> {" " + data.item.number}</Text>
              <Text style={{ fontSize: responsiveFontSize(1.7), color: '#000',  }}> Return amount {data.item.returnamount}</Text>

              </View>
              

            </TouchableOpacity>
          )}
          
        />

      </ScrollView>
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


export default Return;
