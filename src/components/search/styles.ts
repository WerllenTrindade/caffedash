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
        height: 45,
        borderRadius: 10,
        paddingLeft: 45,
        color: colors.white,
        fontFamily: fontFamily.regular
    },
    containSliders:{
        backgroundColor: colors.primary,
        right: 8,
        borderRadius: 8,
        position: 'absolute',
    },
    sliders:{
        padding: 10,
    },
    search:{
        position: 'absolute',
        left: 10,
    },
})