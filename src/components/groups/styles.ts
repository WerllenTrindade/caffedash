import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    buttonActive: {
        backgroundColor: colors.primary, borderRadius: 8, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2
    },
    text: {
        fontFamily: fontFamily.regular, 
        padding: 10
    },
    textSelect: {
        color: colors.white
    },
    textNoSelect: {
        color: colors.title 
    }
})