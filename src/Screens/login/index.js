import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView, StatusBar
} from "react-native";
import React, { useState } from "react";
import styles from "./style";FontAwesome
import { Colors } from '../../Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { Calibri } from "../../Constants/Fonts";
import { Images } from "../../Constants/ImageIconContant";
import { ColorSpace } from "react-native-reanimated";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');




  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Image
        style={styles.splashBg}
        resizeMode='stretch'
        source={Images.spbgm}
      />
      <Image
        style={styles.book}
        resizeMode='stretch'
        source={Images.book}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, }}>

        <View style={{ width: "100%", marginTop: '50%',justifyContent:'center' }}>
          <View >
            <Image
              style={styles.splashLogo}
              source={Images.splash_logo}
            />
            <Text style={{alignSelf:'center',color:'#555',fontSize:responsiveFontSize(4),marginVertical:responsiveWidth(5)}}>Welcome Back !</Text>
            <View style={styles.inputContainer}>
              <FontAwesome style={{ marginLeft: responsiveWidth(2.5) }} name="user" color={Colors.primary} size={responsiveWidth(6)} />
              <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="User Name"
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.inputContainer}>
              <FontAwesome style={{ marginLeft: 10 }} name="lock" color={Colors.primary} size={responsiveWidth(6)} />
              <TextInput
                value={pass}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(pas) => setPass(pas)}
                placeholder="Password"
                secureTextEntry
                style={styles.inputfild}
              />
            </View>

          </View>
          
          <Text style={{ color: "#555", marginTop: 20, alignSelf: "flex-start", fontFamily: Calibri.bold, marginBottom: 10, fontSize: responsiveFontSize(2.2) }}>
            Remember Me
           
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Main')
            }}>
            <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.2), color: "#fff", fontFamily: Calibri.bold }}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Forgot')
          }} style={{ alignSelf: "center", marginTop: 20 }} onPress={() => { navigation.navigate('Forgot') }}>
            <Text style={{ color: Colors.primary, fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.2) }}>Forgot Password ?</Text>
          </TouchableOpacity>

        
         
        </View>
      </ScrollView>
      <Text style={{ color: "#555", marginTop: 20, alignSelf: "flex-start", fontFamily: Calibri.regular, marginBottom: 10, fontSize: responsiveFontSize(2.2),  alignSelf: 'center', }}>
            copyright <Text style={{ color: Colors.primary }}>Bukshop</Text> v 0.1

          </Text>
    </View>
  )
}

export default Login;