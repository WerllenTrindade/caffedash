import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    contain: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
    },
    input:{
        backgroundColor: '#313131',
        height: 52,
        borderRadius: 10,
        paddingLeft: 45,
        color: colors.white,
        fontFamily: fontFamily.regular
    },
    search:{
        position: 'absolute',
        left: 10,
    },
})