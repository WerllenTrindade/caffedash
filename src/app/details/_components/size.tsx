import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    size: string
}

export function Size({size}: Props){
    return (
        <View style={s.container}>
            <Text style={s.sizeColor}>{size}</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        backgroundColor: colors.primary_very_light,
        borderWidth: 1,
        borderColor: colors.primary,
        width: 96,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    sizeColor:{
        fontSize: 14,
        color: colors.primary,
        fontFamily: fontFamily.regular
    }
})