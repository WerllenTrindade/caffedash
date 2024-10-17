import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.white, 
        borderRadius: 8,
    },
    contain:{
        paddingHorizontal: 8,
        gap: 4
    },
    title: {
        fontFamily: fontFamily.semiBold, 
        letterSpacing:  1,
        paddingTop: 3
    },
    description: {
        color: colors.text
    },
    price: {
        color: colors.text_price,
        fontFamily: fontFamily.semiBold,
        fontSize: 18
    },
    containPrice:{ 
        paddingVertical: 5,
    },
    containerButton: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        shadowColor: "#000",
    },
    icon:{
        padding: 10
    }
})