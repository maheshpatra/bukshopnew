import React from "react";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';
import {
  Forgot,
  Initial,
  Login,
  Otp,
  Profile,
  ReturnDetails,
  SaleDetails,
  Main,
  Print
} from "../Screens";

const Stack = createNativeStackNavigator();

const MainNavigation = (props) => {

  const horizontalAnimation = {
    gestureDirection: "horizontal",
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  const verticalAnimation = {
    gestureDirection: "vertical",
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '',
        },
        headerShadowVisible: false,
      }}
    >

     <Stack.Screen
        name="Initial"
        component={Initial}
        options={horizontalAnimation}
      /> 
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: 'Login', headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{headerTitle: 'Forgot', headerShown: false}}
      />
      
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{headerTitle: 'Enter Otp', headerShown: false}}
      />  
    
      <Stack.Screen
        name="Main"
        component={Main}
        options={horizontalAnimation}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={horizontalAnimation}
      />
      <Stack.Screen
        name="ReturnDetails"
        component={ReturnDetails}
        options={horizontalAnimation}
      />
      <Stack.Screen
        name="SaleDetails"
        component={SaleDetails}
        options={horizontalAnimation}
      />
      <Stack.Screen
        name="Print"
        component={Print}
        options={horizontalAnimation}
      />
     
    </Stack.Navigator>
  );
};

// export default MainNavigation;
export { MainNavigation };
