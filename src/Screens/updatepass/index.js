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
import { Colors } from '../../Constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import { Calibri } from "../../Constants/Fonts";

const UpdatePass = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
     
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
       
        <View style={{ width: "100%", marginTop: responsiveHeight(4) }}>
          <View >
            <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="New Password"
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: 10 }} name="lock" color={Colors.primary} size={responsiveWidth(6)} /> */}
              <TextInput
                value={pass}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(pas) => setPass(pas)}
                placeholder="Confirm Password"
                secureTextEntry
                style={styles.inputfild}
              />
            </View>
            
          </View>
         
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Main')
                }}>
            <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.2), color: "#fff",fontFamily:Calibri.bold }}>
              Continue
            </Text>
          </TouchableOpacity>
          
         
        </View>
      </ScrollView>
    </View>
)}

export default UpdatePass;