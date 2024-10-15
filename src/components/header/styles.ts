import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 20,
        justifyContent: "space-between",
    },
    img: {
        width: 50,
        height: 50,
    },
    title:{
        fontFamily: fontFamily.regular,
        color: colors.white
    },
    text:{
        fontFamily: fontFamily.regular,
        color: colors.white
    }
})