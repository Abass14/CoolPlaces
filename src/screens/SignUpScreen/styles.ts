import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1, marginHorizontal: 30
    },
    backBtnView: {
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 20,
        alignSelf: 'flex-start'
    },
    backBtn: {
        alignSelf: 'flex-start'
    },
    inputView: {
        flex: 1,
    },
    loginText: {
        fontSize: 25,
        fontWeight: '600',
    },
    signUpTxt: {
        fontSize: 20,
        color: colors.red,
        fontWeight: '600',
    },
    inputStyles: {
        marginBottom: 20
    }
})