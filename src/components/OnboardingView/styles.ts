import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewOne: {
        flex: 1,
        resizeMode: 'cover'
    },
    viewTwo: {
        backgroundColor: 'white',
        borderTopLeftRadius: 100,
        position: 'absolute',
        bottom: 0,
        height: 300,
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    details: {
        flex: 1,
        paddingHorizontal: 20
    },
    buttonView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    rowView: {
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    container: {
        flex: 1,
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15
    },
    detailsTxt: {
        marginTop: 15,
        textAlign: 'center'
    },
    skipBtn: {
        fontSize: 16
    },
    nextBtn: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    roundView: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    getStartedBtn: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        color: 'white',
        fontSize: 16
    }
})