import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView, StatusBar
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Colors } from "../../Constants/Colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { Images } from "../../Constants/ImageIconContant";
import { Calibri } from "../../Constants/Fonts";


const Forgot = ({ navigation }) => {
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

        <View style={{ width: "100%", marginTop: '50%', justifyContent: 'center' }}>
          <View >
            <Image
              style={styles.splashLogo}
              source={Images.splash_logo}
            />
            <Text style={{ alignSelf: 'center', color: '#555', fontSize: responsiveFontSize(4), marginVertical: responsiveWidth(5) }}>Forgot Password</Text>
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



          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Otp')
            }}>
            <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.2), color: "#fff", fontFamily: Calibri.bold }}>
              Continue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Forgot')
          }} style={{ alignSelf: "center", marginTop: 20 }}>
            <Text style={{ color: '#555', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.2) }}>Already Have an account ?
              <Text style={{ color: Colors.primary }}> LOGIN</Text></Text>
          </TouchableOpacity>


          
        </View>
      </ScrollView>
      <Text style={{ color: "#555", marginTop: 20, alignSelf: "flex-start", fontFamily: Calibri.regular, marginBottom: 10, fontSize: responsiveFontSize(2.2),  alignSelf: 'center', }}>
            copyright <Text style={{ color: Colors.primary }}>Bukshop</Text> v 0.1

          </Text>
    </View>
  )
}

export default Forgot