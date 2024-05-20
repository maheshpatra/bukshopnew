import React from 'react'
import { View,Image, Text, TouchableOpacity, Alert,NativeModules } from 'react-native'
import {Colors} from '../../Constants/Colors'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Calibri } from '../../Constants/Fonts';
const HeaderBack = ({ menuClicks,title,icon,custom }) => {
    const {StatusBarManager} = NativeModules;

    const height = StatusBarManager.HEIGHT;
    const navigation = useNavigation()
    return (

        <LinearGradient colors={['#fff', '#fff']}  end={{x: 1, y: 0}}  style={{ height: 59, width: '100%', backgroundColor: Colors.backgroundcolor, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15,}}>
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <Feather name="arrow-left" color={'#000'} size={responsiveFontSize(4)} />  
            </TouchableOpacity>
            <Text style={{color:'#000',fontSize:20,letterSpacing:.5,fontFamily:Calibri.bold,marginLeft:20}}>{title}</Text>
            {
                custom?custom:
                <TouchableOpacity></TouchableOpacity>
            }
           

        </LinearGradient>
    )
}

export default HeaderBack