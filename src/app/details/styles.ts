import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    name:{
        fontSize: 20,
        fontFamily: fontFamily.semiBold,
        color: colors.title
    },
    info: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.text
    },
    numberLike:{
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.title
    },
    numberParam:{
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.text
    },
    title:{
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.title
    },
    description:{
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.text
    },
    read:{
        color: colors.primary,
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
    },
    footer:{
        flex: 1,
        paddingHorizontal: 20
    },
    containFooter:{

    },
    price: {
        color: '#9B9B9B',
        fontSize: 14,
        fontFamily: fontFamily.regular,
    },
    amount:{
        color: colors.primary,
        fontSize: 18,
        fontFamily: fontFamily.semiBold,
    }
})
