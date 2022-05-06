import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainBlock: {
        backgroundColor:"#fff",
        flexDirection: "row",
        width: 200,
        height: 100,
        borderRadius: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    massage__box: {
        minWidth: 160,
        flexDirection: "column",
        justifyContent: "center",

    },
    img_box: {
        minWidth: 40,
        justifyContent: "center",
        alignItems: "center",
        borderLeftWidth: 1,
        borderLeftColor: "silver",
    },
    title: {
        width: "100%",
        paddingLeft: 10,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "silver",
        justifyContent: "center",
    },
    text: {
        flex: 2,
        paddingLeft: 10,
        justifyContent:'center'
    },
    img: {
        width: 20,
        height: 20,
    }


})
