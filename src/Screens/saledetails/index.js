
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import { SwipeListView } from 'react-native-swipe-list-view';
import Modal from "react-native-modal";
import Header from '../../Component/Header';
import HeaderBack from '../../Component/HeaderBack';

// create a component
const SaleDetails = ({ props, route, navigation }) => {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSchool, setSelectedSchool] = useState();
  const [payment, setpaymet] = useState();

  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const itemsArray = [
    { id: 1, name: 'Bengali' },
    { id: 2, name: 'Math' },
    { id: 3, name: 'Science' }
  ];

  const [selected, setSelected] = useState(false);


  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxClick = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
    console.log(selectedItems)
  };

  const styles = Styles();

  return (
    <View style={{ flex: 1, backgroundColor: '#FDF3E8' }}>
      <HeaderBack title={'Sale'} />
      <ScrollView>
        <View style={{ width: '95%', backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 6, elevation: 5, marginBottom: 10 }}>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: responsiveWidth(12.5) }}>
            <TextInput cursorColor={Colors.primary} placeholder='School name' placeholderTextColor={'#ccc'} style={{ paddingLeft: 15, color: '#555' }} />
          </View>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 10, height: responsiveWidth(12.5), backgroundColor: '#fff' }}>

            <View style={{ width: '45%', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: 45 }}>
              <Picker
                style={{ marginTop: -5 }}
                selectionColor={'#555'}
                placeholder='Select School'
                selectedValue={selectedSchool}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedSchool(itemValue)
                }>
                <Picker.Item label="Patna primary school" value="Patna primary school" />
                <Picker.Item label="Mahanad high school" value="mahanad high school" />
              </Picker>
            </View>
            <View style={{ width: '45%', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: 45 }}>
              <Picker
                style={{ marginTop: -5 }}
                selectionColor={'#555'}
                placeholder='Select Class'
                selectedValue={selectedClass}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedClass(itemValue)
                }>
                <Picker.Item label="class 7" value="7" />
                <Picker.Item label="class 8" value="8" />
                <Picker.Item label="class 10" value="10" />
              </Picker>
            </View>
          </View>

          <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '90%', alignSelf: 'center', marginTop: 10, backgroundColor: '#fff' }}>


            <View style={{ width: '100%', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: 45, flexDirection: 'row', alignItems: 'center' }}>
              {selectedItems.length > 0 ?
                selectedItems.map((item) =>
                  <Text style={{ paddingLeft: 15, color: '#555' }} >{item}</Text>)
                : <Text style={{ paddingLeft: 15, color: '#555' }} >Select Book Name</Text>

              }
              <MaterialIcons style={{ position: 'absolute', right: 20, padding: 5 }} name='arrow-drop-down' color={'#000'} size={24} onPress={() => setSelected(!selected)} />
            </View>

            {selected && itemsArray.map((item) =>

              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                <CheckBox
                  key={item.id}
                  title={item.name}
                  value={selectedItems.includes(item.name)}
                  onValueChange={() => handleCheckboxClick(item.name)}
                  tintColors={{ true: Colors.primary, false: Colors.primary }}
                />

                <Text>{item.name}</Text>

              </View>
            )}

          </View>



          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 10, height: responsiveWidth(12.5), backgroundColor: '#fff' }}>


            <View style={{ width: '100%', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: 45 }}>
              <TextInput cursorColor={Colors.primary} placeholder='Student Name' placeholderTextColor={'#ccc'} style={{ paddingLeft: 15, color: '#555' }} />

            </View>
          </View>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 10, height: responsiveWidth(12.5), backgroundColor: '#fff' }}>


            <View style={{ width: '100%', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: 45 }}>
              <TextInput cursorColor={Colors.primary} placeholder='Phone Number' placeholderTextColor={'#ccc'} style={{ paddingLeft: 15, color: '#555' }} />

            </View>
          </View>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 10, height: responsiveWidth(12.5), backgroundColor: '#fff' }}>

            <View style={{ width: '45%', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: 45 }}>
              <Picker
                style={{ marginTop: -5 }}
                selectionColor={'#555'}
                placeholder='Select Payment'
                selectedValue={payment}
                onValueChange={(itemValue, itemIndex) =>
                  setpaymet(itemValue)
                }>
                <Picker.Item label="Cash" value="Cash" />
                <Picker.Item label="Online" value="Online" />
              </Picker>
            </View>
            <View style={{ width: '45%', borderRadius: 5, backgroundColor: Colors.primary, height: 45, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>{'₹1250'}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {setModalVisible(true)
            }}>
            <Text style={{ fontSize: responsiveFontSize(2.5), color: "#fff", fontFamily: Calibri.regular }}>
              SALE NOW
            </Text>
          </TouchableOpacity>
        </View>





      </ScrollView>

      <Modal isVisible={isModalVisible}>
        <TouchableOpacity onPress={()=>setModalVisible(false)} style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{  width: responsiveWidth(80), backgroundColor: '#fff', alignSelf: 'center', borderRadius: 10 }}>
            <Image source={require('../../assets/images/tick.png')} style={{ height: responsiveWidth(20), width: responsiveWidth(20), alignSelf: 'center', marginTop: 20 }} />
            <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: responsiveFontSize(2.6), color: '#01B629' }}>Payment Confirmation</Text>
            <View style={{ alignItems:'center',flexDirection: 'row',  width: '80%', alignSelf: 'center',  marginTop: 20, justifyContent: 'space-between' }}>
              <Text style={{color:'#000',fontSize:responsiveFontSize(2)}}>Payment Mode</Text>
              <Text  style={{color:'#000',fontSize:responsiveFontSize(2)}}>Cash</Text>
            </View>
            <View style={{ alignItems:'center',flexDirection: 'row',  width: '80%', alignSelf: 'center',  marginTop: 14, justifyContent: 'space-between' }}>
              <Text style={{color:'#000',fontSize:responsiveFontSize(2)}}>Amount Paid</Text>
              <Text  style={{color:'#000',fontSize:responsiveFontSize(2)}}>234234</Text>
            </View>
            <View style={{ alignItems:'center',flexDirection: 'row',  width: '80%', alignSelf: 'center',  marginTop: 14, justifyContent: 'space-between' }}>
              <Text style={{color:'#000',fontSize:responsiveFontSize(2)}}>Bill Value</Text>
              <Text  style={{color:'#000',fontSize:responsiveFontSize(2)}}>2344</Text>
            </View>
            <View style={{ alignItems:'center',flexDirection: 'row',  width: '80%', alignSelf: 'center',  marginTop: 14, justifyContent: 'space-between' }}>
              <Text style={{color:'#000',fontSize:responsiveFontSize(2)}}>Payback Amount</Text>
              <Text  style={{color:'#000',fontSize:responsiveFontSize(2)}}>345</Text>
            </View>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',height:45,width:'80%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:Colors.primary,marginTop:15,borderRadius:20,marginBottom:20}} onPress={toggleModal}>
            <Text style={{color:'#fff',fontSize:responsiveFontSize(1.9)}}>Swipe to Confirm & print</Text>
            <Entypo style={{ padding:4,borderRadius:33,backgroundColor:'#fff',marginLeft:10 }} name='chevron-right' color={Colors.primary} size={24} onPress={() => setSelected(!selected)} />
          </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
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


export default SaleDetails;
