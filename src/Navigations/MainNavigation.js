import React from "react";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';
import {
  AboutUs,
  Brand,
  CreateAccount,
  Forgot,
  Initial,
  Login,
  Main,
  Model,
  YourDevice,
  MyOrder,
  Otp,
  PrivacyPolicy,
  Signup,
  Tearms,
  UpdatePass,
  DeviceDetails,
  UploadImage,
  Confirm,
  Profile,
  ReturnDetails,
  SaleDetails,
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
        name="Signup"
        component={Signup}
        options={{headerTitle: 'Signup', headerShown: true}}
      /> 
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{headerTitle: 'Enter Otp', headerShown: false}}
      />  
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerTitle: 'Create Account', headerShown: true}}
      />    
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerTitle: 'Privacy Policy', headerShown: true}}
      /> 
       <Stack.Screen
        name="Tearms"
        component={Tearms}
        options={{headerTitle: 'Tearms & Conditions', headerShown: true}}
      />
      <Stack.Screen
        name="Brand"
        component={Brand}
        options={{headerTitle: 'Select Brand', headerShown: true}}
      />
       <Stack.Screen
        name="Model"
        component={Model}
        options={{headerTitle: 'Select Model', headerShown: true}}
      />
       <Stack.Screen
        name="UpdatePass"
        component={UpdatePass}
        options={{headerTitle: 'Enter Password', headerShown: true}}
      />
       
      <Stack.Screen
        name="YourDevice"
        component={YourDevice}
        options={{headerTitle: 'Your Device', headerShown: true}}
      />
      <Stack.Screen
        name="DeviceDetails"
        component={DeviceDetails}
        options={{headerTitle: 'Device Details', headerShown: true}}
      />
      <Stack.Screen
        name="UploadImage"
        component={UploadImage}
        options={{headerTitle: 'Upload Details', headerShown: true}}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        // options={{headerTitle: 'Upload Details', headerShown: true}}
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
     
    </Stack.Navigator>
  );
};

// export default MainNavigation;
export { MainNavigation };
