// HelpScreen.js

import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Calibri } from '../../Constants/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Picker } from '@react-native-picker/picker';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import Header from '../../Component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../Constants/Colors';
const Sale = ({navigation}) => {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSchool, setSelectedSchool] = useState();
  const data = [
    { schoolname: 'Alipur Malty parper high school', class: 'class 7', subject: 'Bengali , English ' },
    { schoolname: 'Alipur Malty parper high school', class: 'class 8', subject: 'Bengali , English ' },
    { schoolname: 'Alipur Malty parper high school', class: 'class 9', subject: 'Bengali , History ' },

  ]

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFaqItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <View style={{  width: '95%', backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 6, elevation: 5, marginBottom: 20 }}>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', height: responsiveWidth(12.5) }}>
            <TextInput cursorColor={Colors.primary} placeholder='Bookset code' placeholderTextColor={'#ccc'} style={{ paddingLeft: 15, color: '#555' }} />
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
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={{  fontSize: responsiveFontSize(2.5), color: "#fff", fontFamily: Calibri.regular }}>
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>

        {data.map((item)=>
        <TouchableOpacity onPress={() => {
          navigation.navigate('SaleDetails')
        }} style={{backgroundColor:'#fff',width:'100%',alignSelf:'center',marginBottom:10,padding:responsiveWidth(2)}}>
        <Text style={{fontSize:responsiveFontSize(2.2),color:'#000',marginLeft:responsiveWidth(4)}}><Ionicons  name="book" color={'#555'} size={responsiveFontSize(2)} />  {" "+item.schoolname+" "+item.subject}</Text>
        <Text style={{fontSize:responsiveFontSize(2.2),color:'#000',marginLeft:responsiveWidth(4)}}><Ionicons  name="school" color={'#555'} size={responsiveFontSize(2)} /> {" "+item.schoolname}</Text>
        <Text style={{fontSize:responsiveFontSize(2.2),color:'#000',marginLeft:responsiveWidth(4)}}><FontAwesome5  name="chalkboard-teacher" color={'#555'} size={responsiveFontSize(2)} /> {" "+item.class}</Text>
        
        </TouchableOpacity>
        )}

      </ScrollView>
    </View>

    //  <SkeletonPlaceholder >
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={80} alignSelf='center' borderRadius={10} marginTop={30} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />


    // </SkeletonPlaceholder>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3E8',

  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    fontFamily: Calibri.bold,
    marginBottom: 16,
    marginLeft: 15
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  faqItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  faqQuestion: {
    fontSize: 18,
    fontFamily: Calibri.bold,
    color: '#000'
  },
  faqAnswer: {
    fontSize: responsiveFontSize(2),
    marginTop: 8,
    fontFamily: Calibri.regular,
    color: '#555'
  },
   button:{
    height: responsiveWidth(12),
    width: "90%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: responsiveWidth(6),
    borderRadius: 5,
  },
});

export default Sale;
