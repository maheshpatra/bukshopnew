
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
const DeviceDetails = ({ props, route, navigation }) => {

  const styles = Styles();
  const [verient, setVerient] = useState("")
  const [questionindex, setQuestionIndex] = useState(0)
  const Questions = [
    {
      id: 0,
      name: 'Tell us more about your device?',
      ans: 'Please answer a few questions about your device.',
      model: 1,
      subquestion: [
        {
          name: "1. Are you able to make and receive calls?",
          subques: "Check your device for cellular network connectivity issues.",
          ans: ['Yes', 'No']
        },
        {
          name: "2. Is your device's touch screen working properly?",
          subques: "Check the touch screen functionality of your phone.",
          ans: ['Yes', 'No']
        },
        {
          name: "3. Is your phone's screen original?",
          subques: "Pick 'Yes' if screen was never changed or was changed by Authorized Service Center. Pick 'No' if screen was changed at local shop.",
          ans: ['Yes', 'No']
        }
      ]
    },
    {
      id: 1,
      name: 'Select screen/body defects that are applicable!',
      ans: 'Please provide correct details',
      model: 2,
      subquestion: [
        {
          name: "Broken/scratch on device screen",
          image: require('../../assets/question/sc.png'),

        },
        {
          name: "Dead spot/visible lines on screen",
          image: require('../../assets/question/dl.png'),

        },
        {
          name: "Scratch/Dent on device body",
          image:  require('../../assets/question/sdb.png'),

        }, {
          name: "Device panel missing/ Broken",
          image:  require('../../assets/question/dmb.png'),

        },
      ]
    },

  ]
  const next = () => {
    if (Questions.length <= questionindex + 1) {
      navigation.navigate('UploadImage')
    } else {
      setQuestionIndex(questionindex + 1)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      {questionindex >= 0 && <View style={{ width: '92%', alignSelf: 'center' }}>
        <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize: responsiveFontSize(2.5), marginTop: 10, }}>{Questions[questionindex].name}</Text>
        <Text style={{ fontFamily: Calibri.regular, color: '#999', fontSize: responsiveFontSize(1.8), marginTop: 5, }}>{Questions[questionindex].ans}</Text>

      </View>}
      {
        Questions[questionindex].model == 1 &&
          Questions[questionindex].subquestion.map((item) =>

            <View style={{ width: '92%', alignSelf: 'center',marginTop:15 }}>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize: responsiveFontSize(2.5), marginTop: 10, }}>{item.name}</Text>
              <Text style={{ fontFamily: Calibri.regular, color: '#999', fontSize: responsiveFontSize(1.8), marginTop: 5, }}>{item.subques}</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                {item.ans.map((i)=>
                 <TouchableOpacity  style={{ marginRight: 10, width: '48%', height: 37, backgroundColor: Colors.primary, borderRadius: 5, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                 <Fontisto name='radio-btn-passive' size={16} color={'#fff'} style={{ backgroundColor: '#fff', borderRadius: 20 }} />
                 <Text style={{ marginLeft: 8, fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: '#fff' }}>{i}</Text>
 
               </TouchableOpacity>
                )}
             
              </View>
            </View>
          )
      }
      {
        Questions[questionindex].model == 2 &&
        <FlatList
        data={Questions[questionindex].subquestion}
        contentContainerStyle={{ width: '92%', alignSelf: 'center', justifyContent: 'flex-end',marginTop:10 }}
        numColumns={2}
        renderItem={({ item, index }) =>
          <TouchableOpacity  style={{ height: responsiveWidth(40), width: responsiveWidth(42), backgroundColor: '#fff', marginRight: responsiveWidth(5), marginBottom: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: '#ccc', borderRadius: 10, marginLeft: responsiveWidth(1) }}>
            <Image resizeMode='contain' source={item.image} style={{ width: responsiveWidth(20), height: responsiveWidth(20) }} />
            <Text style={{ fontFamily: Calibri.regular, color: '#999', marginTop: 5,textAlign:'center',fontSize:responsiveFontSize(1.9),paddingHorizontal:5 }}>{item.name}</Text>

          </TouchableOpacity>
        }
      />
      }

      <TouchableOpacity onPress={next} style={{ width: '100%', position: 'absolute', bottom: 0, height: 50, backgroundColor: Colors.primary, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginLeft: 8, fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: '#fff' }}>Continue</Text>


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


export default DeviceDetails;
