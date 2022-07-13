import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
    regular: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: colors.purple,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circular: {
        height: 60,
        width: 100,
        backgroundColor: colors.purple,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        color: colors.white,
        fontSize: 16
    },
    roundView: {
        height: 30,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnRow: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 20}
})