import React, { useEffect, useState} from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,} from "@react-navigation/drawer";
import {TouchableHighlight} from "react-native";
import {
        Home
      } from "../Screens";
import { DrawerActions } from "@react-navigation/native";
import {  StyleSheet, Text, View, Dimensions, Image, useWindowDimensions } from "react-native";
import {Icon} from 'react-native-basic-elements';
import { Images } from '../Constants/ImageIconContant';
import{ Colors} from '../Constants/Colors'
import { Calibri } from '../Constants/Fonts';
import { BottomNavigation_User } from "../Navigations/BottomNavigation_User";
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const Drawer = createDrawerNavigator();

function CustomDrawerContent_User(props) {
  const [activeItem, setActiveitem] = React.useState("Home");
  
  clickIndividual_DrawerMenu = (screenName) => {
    setActiveitem(screenName);
    if (screenName == "Home") {
      console.log(activeItem);
      //props.navigation.replace(screenName);
      props.navigation.navigate(screenName); 

    } else {
      console.log(activeItem);
      //props.navigation.replace(screenName);
      props.navigation.navigate(screenName); 
    }
  };

  function logout(){
   
   
  }

  return (
    <DrawerContentScrollView style={{backgroundColor: Colors.white}} showsVerticalScrollIndicator={false} {...props}>
      <View >
      { /*<DrawerItemList {...props} />*/}
        <View >
          <DrawerItem
            label="Course"
            labelStyle={{ color: activeItem == "Home"? Colors.primary: Colors.fontcolor, fontWeight: '800', fontFamily: Calibri.regular, fontSize: responsiveFontSize(1.8)}}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.toggleDrawer());
              clickIndividual_DrawerMenu("Home");
            }}
            style={{color: activeItem == "Home" ? Colors.primary : Colors.fontcolor}}
            icon={() => (
              <Icon
              name='home'
              type='AntDesign'
              color={
                activeItem == "Home"
                  ? Colors.primary
                  : Colors.fontcolor
              }
              size={22}
              />
            )}
          />
        </View>
        
        <View >
          <DrawerItem
            label="Logout"
            labelStyle={{ color: Colors.fontcolor, fontWeight: '800', fontFamily: Calibri.regular, fontSize: responsiveFontSize(1.8) }}
            onPress={() => {logout();}}
            icon={() => (<Icon name='log-out' type='Entypo'  color={Colors.fontcolor} size={22} />
            )}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}


const DrawerNavigation = () => {

  return (
   <>
        
         <Drawer.Navigator  screenOptions={{
          drawerPosition: "left",
          headerShown: false,
          headerStyle: {backgroundColor: Colors.secondary},
          headerTitleStyle: { color: Colors.white},
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
          swipeEnabled: false,
          drawerStyle: {width: Dimensions.get('window').width / 1.50},
        }} drawerContent={(props) => <CustomDrawerContent_User {...props} />}>
          {/* == For showing Tabs under sidemenu == */}
           <Drawer.Screen  name="Dashboard" component={BottomNavigation_User}  />
    
        </Drawer.Navigator>
        
  </>
    
  );
};

export  {DrawerNavigation};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});
