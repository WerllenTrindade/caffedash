import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        shadowColor: "#000",
        width: '100%'
    },
    text:{
        paddingVertical: 21,
        color: colors.white,
        fontFamily: fontFamily.semiBold,
        textAlign: 'center'
    }
})