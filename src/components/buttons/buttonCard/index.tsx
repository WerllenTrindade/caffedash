import { Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { s } from "./styles";
export default function ButtonCard() {
    return (

            <TouchableOpacity activeOpacity={0.7} style={s.container}>
                <AntDesign  style={s.icon} name="plus" size={15} color="#fff" />
            </TouchableOpacity>
    )
}

