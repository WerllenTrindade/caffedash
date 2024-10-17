import { colors } from "@/styles/colors"
import { StyleSheet, View } from "react-native"

export function Line(){
    return (
        <View style={s.container}/>
    )
}

const s = StyleSheet.create({
    container: {
        width: '100%',
        height: 0.9,
    backgroundColor: '#EAEAEA',
        marginVertical: 20
    }
})