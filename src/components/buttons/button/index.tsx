import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { s } from "./styles";

interface Props extends TouchableOpacityProps {
    text: string;
}
export default function Button({text}: Props) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={s.container}>
            <Text style={s.text}>{text}</Text>
        </TouchableOpacity>
    )
}

