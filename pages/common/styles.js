import { StyleSheet } from 'react-native';
import colors from './colors';
const primaryColor = "#54D1A2";
const secondaryColor = "#D15483";

const styles = StyleSheet.create({
    centeredContent:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer:{
    },
    formHeader:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 110,
        marginTop: 30
    },
    formGroup:{
        padding: 14
    },
    formInputLabel:{
        fontSize:20,
        paddingBottom: 8
    },
    formInput:{
        fontSize:16,
        width: "100%",
        height: 40,
        borderRadius: 8,
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 8
    },
    checkBoxContainer:{
        display: "flex",
        flexDirection:"row"
    },
    checkBox:{
        alignSelf: "center"
    },
    checkboxLabel:{
        margin: 8,
        fontSize:16
    },
    primaryButton:{
        display: "flex",
        backgroundColor: colors.primary,
        width: 220,
        padding: 12,
        borderRadius: 12,
        fontSize: 22,
        marginVertical: 30
    },
    primaryButtonText:{
        color:"#fff",
        textAlign: "center",
        fontSize: 22
    },
    logoIcon:{
        width: 50,
        height: 50
    },
    tabBar:{
        backgroundColor: primaryColor
    },
    tabBarProfileIcon:{
        width: 30,
        height: 30
    },
    text:{
        fontFamily:""
    },
});

export default styles;