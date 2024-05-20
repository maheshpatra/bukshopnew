import React from 'react'
import { View, Image, Text, TouchableOpacity, Alert, NativeModules } from 'react-native'
import { Colors } from '../../Constants/Colors'
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Calibri } from '../../Constants/Fonts';
const Header = ({ menuClicks, title, icon }) => {
    const { StatusBarManager } = NativeModules;
    const navigation = useNavigation();
    const height = StatusBarManager.HEIGHT;
    return (
        <LinearGradient colors={['#fff', '#fff']} end={{ x: 1, y: 0 }} style={{ height: 59, width: '100%', backgroundColor: Colors.backgroundcolor, flexDirection: 'row', alignItems: 'center', paddingHorizontal: responsiveScreenWidth(4.5), justifyContent: 'space-between' }}>

            <Text style={{ color: Colors.primary, fontSize: responsiveFontSize(2.5), letterSpacing: .5, fontFamily: Calibri.bold }}>Bukshop</Text>
            <View style={{ width: '30%', alignItems: 'center', flexDirection: 'row' }}>

               
                <Fontisto onPress={()=>{
                    navigation.navigate('Notification')
                }} name="bell" color={Colors.primary} size={responsiveFontSize(3)} style={{ marginLeft: responsiveFontSize(2),padding:responsiveFontSize(.8),backgroundColor:'#F7DDC2',borderRadius:20 }} />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Profile')
                }}>
                    <Image

                        source={{ uri: 'https://picsum.photos/id/456/200/200' }}
                        style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), marginLeft: responsiveFontSize(2.5), borderRadius: 20 }}
                    />
                </TouchableOpacity>

                {/* <Image  source={require('../../assets/images/logo.png')} style={{height:30,width:30,alignSelf:'center'}} /> */}
            </View>

        </LinearGradient>
    )
}

export default Header