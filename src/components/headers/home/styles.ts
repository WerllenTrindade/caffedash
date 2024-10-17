import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: "space-between"
    },
    linearGradient: {
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10
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