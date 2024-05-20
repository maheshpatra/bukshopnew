// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import { Colors } from '../../Constants/Colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import { Calibri } from '../../Constants/Fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'#fff',
      justifyContent:'center',
      },
      social: {
        borderRadius: 20,
        size: 30,
        padding: 5,
        margin: 8,
        alignSelf: "center",
      },
      inputContainer: {
        borderBottomWidth: 2,
        height: responsiveWidth(12.8),
        borderColor: Colors.primary,
        flexDirection: "row",
        alignItems: "center",
        
      },
      inputIcon: {
        marginRight: 20,
      },
      inputfild: {
        paddingLeft: 16,
        height: responsiveHeight(6.5),
        borderColor: Colors.primary,
        width: "80%",
        color:'#555',
        fontFamily:Calibri.regular,
        fontSize:responsiveFontSize(2.2)
      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      button:{
        height: responsiveWidth(12),
        width: "100%",
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: responsiveWidth(6),
        borderRadius: 5,
      },
      splashBg: {
        height: responsiveWidth(118), width: responsiveWidth(90), position: 'absolute', right: 0,bottom:responsiveWidth(19)
      },
      splashLogo: {
        height: responsiveWidth(30), width: responsiveWidth(30),alignSelf:'center'
      },
      book: {
        height: responsiveWidth(50), width: responsiveWidth(50), position: 'absolute', left: 0,top:0
      },
});

export default styles;
