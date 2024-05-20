import React,{ useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, Dimensions, Pressable} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, CardStyleInterpolators} from '@react-navigation/native-stack';
import {
    AboutUs,
    FAQs,
    Home, Invoice, Profile,
    Return,
    Sale,
} from "../Screens";
import { Icons, Images } from '../Constants/ImageIconContant';
import { Calibri } from '../Constants/Fonts';
import{ Colors} from '../Constants/Colors'
import { Icon } from 'react-native-basic-elements';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
const Bottom = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CollegeStack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';



const BottomNavigation_User = (props) => {

  //initialRouteName="Home"

  return (
    <Bottom.Navigator  initialRouteName="Home" screenOptions={{
        headerShown: false,
        "tabBarHideOnKeyboard": true,
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: true,
        headerShadowVisible: false,
        tabBarStyle: {
            height: 65,
            paddingBottom: 5,
        },
        
      }}>
     
      {/* == For showing Tabs under sidemenu == */}
      <Bottom.Screen 
                name="Home"
                component={Home}
                options={{
                            headerLeft: () => (
                                <Pressable style={{marginHorizontal: 10}} onPress={() => props.navigation.openDrawer()}>
                                    <Icon  name='menu'  type='Entypo' color={Colors.white} size={25} style={{}} />
                                </Pressable>
                            ),
                            tabBarLabel: 'HOME',
                            tabBarIcon: ({ color, size, }) => {
                                return <Icon name='home' type='AntDesign'  color={color} size={size}  />
                            },
                            tabBarLabelStyle: {
                                fontFamily: Calibri.regular,
                                fontSize: responsiveFontSize(1.5),
                                fontWeight: 'bold'
                            },
                       }}
            />
            <Bottom.Screen 
                        name="Sale"
                        component={Sale}
                        options={{
                            headerLeft: () => (
                                <Pressable style={{marginHorizontal: 10}} onPress={() => props.navigation.openDrawer()}>
                                    <Icon  name='menu'  type='Entypo'  color={Colors.white}  size={25} style={{}} />
                                </Pressable>
                            ),
                            tabBarLabel: 'SALE',
                            tabBarIcon: ({ color, size, }) => {
                                return (<Fontisto name='shopping-sale' size={size} color={color} />)
                            },
                            tabBarLabelStyle: {fontFamily: Calibri.regular, fontSize: responsiveFontSize(1.5),fontWeight: 'bold'},
                        }}
                    />
                     <Bottom.Screen 
                        name="Invoice"
                        component={Invoice}
                        options={{
                            headerLeft: () => (
                                <Pressable style={{marginHorizontal: 10}} onPress={() => props.navigation.openDrawer()}>
                                    <Icon  name='menu'  type='Entypo' color={Colors.white} size={25} style={{}} />
                                </Pressable>
                            ),
                            tabBarLabel: 'INVOICE',
                            tabBarIcon: ({ color, size, }) => {
                                return (<FontAwesome5 name='file-invoice'  color={color} size={size} />)
                            },
                            tabBarLabelStyle: {fontFamily: Calibri.regular,fontSize: responsiveFontSize(1.5),fontWeight: 'bold'},
                        }}
                    />
                    <Bottom.Screen 
                        name="Return"
                        component={Return}
                        options={{
                            headerLeft: () => (
                                <Pressable style={{marginHorizontal: 10}} onPress={() => props.navigation.openDrawer()}>
                                    <Icon  name='menu'  type='Entypo' color={Colors.white} size={25} style={{}} />
                                </Pressable>
                            ),
                            tabBarLabel: 'RETURN',
                            tabBarIcon: ({ color, size, }) => {
                                return (<Feather name='package'  color={color} size={size} />)
                            },
                            tabBarLabelStyle: {fontFamily: Calibri.regular,fontSize: responsiveFontSize(1.5),fontWeight: 'bold'},
                        }}
                    />

    </Bottom.Navigator>
  );
};
export {BottomNavigation_User};
