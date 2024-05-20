//import liraries
import React, { useEffect, useState } from "react";
import {View,} from "react-native";

import { DrawerNavigation } from "../../Navigations/DrawerNavigation";

// create a component
const Main = ({props}) => {

  return (
         <View style={{flex: 1}}>
                <DrawerNavigation />
          </View>
  );
};

export default Main;
//props.navigation.navigate('DashDetails')
