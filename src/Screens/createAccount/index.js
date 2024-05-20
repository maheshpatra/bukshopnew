import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image, FlatList, ScrollView
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Colors } from "../../Constants/Colors";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { Calibri } from "../../Constants/Fonts";
const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [confirm, setconfirm] = useState('');

  const data = [
    { id: 'student', label: 'Student' },
    { id: 'faculty', label: 'Faculty' },
  ];

  const handleSignup = () => { };
  const [selectedOption, setSelectedOption] = useState('student'); // State to keep track of the selected option

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };
  const RadioButton = ({ label, selected, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
        <Icon
          name={selected ? 'dot-circle-o' : 'circle-o'} // Icon names can vary based on the icon library you choose
          size={20}
          color={selected ? Colors.primary : 'gray'}
        />
        <Text style={{ marginLeft: 10, fontFamily: 'Nunito-Medium', color: '#555' }}>{label}</Text>
      </TouchableOpacity>
    );
  };




  return (
    <View
      style={styles.container}
    >

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 18 }}>

         


        <View style={{ width: "100%", }}>
          <View style={{alignSelf:'center',width:100,height:100,backgroundColor:'#fff',borderRadius:50,borderWidth:2,marginTop:10}}>
          <MaterialIcons name="edit" color={'black'} size={responsiveWidth(6)} style={{position:'absolute',bottom:0,right:0}} />
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' ,justifyContent:'space-between' }}>
              <View style={{ width: '45%' }}>
              <View style={styles.inputContainer}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveWidth(4), marginVertical: 4,color:'black' }}>First Name</Text>
              <TextInput
                value={name}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setName(txt)}
                //placeholder={selectedOption=='college'?'College Name':'Name'}
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
              </View>
              <View style={{ width: '45%' }}>
              <View style={styles.inputContainer}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveWidth(4), marginVertical: 4,color:'black' }}>Last Name</Text>
              <TextInput
                value={name}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setName(txt)}
                //placeholder={selectedOption=='college'?'College Name':'Name'}
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
              </View>
            </View>

          

            <View style={styles.inputContainer}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveWidth(4), marginVertical: 4,color:'black' }}>Email</Text>

              <TextInput
                value={email}
                placeholderTextColor={Colors.grey}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                //placeholder="Email Id"
                style={styles.inputfild}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveWidth(4), marginVertical: 4,color:'black' }}>Phone</Text>

              <TextInput
                value={number}
                placeholderTextColor={Colors.grey}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setNumber(txt)}
                //placeholder="Contact No"
                style={styles.inputfild}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveWidth(4), marginVertical: 4,color:'black' }}>Address1</Text>

              <TextInput
                value={address}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(txt) => setAddress(txt)}
                //placeholder="Address"
                style={styles.inputfild}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveWidth(4), marginVertical: 4,color:'black' }}>Address2</Text>

              <TextInput
                value={address}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(txt) => setAddress(txt)}
                //placeholder="Address"
                style={styles.inputfild}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveWidth(4), marginVertical: 4,color:'black' }}>Pincode</Text>

              <TextInput
                value={address}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(txt) => setAddress(txt)}
                //placeholder="Address"
                style={styles.inputfild}
              />
            </View>


          </View>

          <TouchableOpacity
            style={styles.signupbtn}
            onPress={() => {
              navigation.navigate('Main')
            }}>
            <Text style={{ fontWeight: "normal", fontSize: responsiveFontSize(2.2), color: "#fff", fontFamily: Calibri.bold }}>
              Create Account
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  )
}

export default CreateAccount;