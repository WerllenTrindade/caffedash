import { Image, Text, TextInput, TextInputProps, View } from "react-native";
import { s } from "./styles";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from "@/styles/colors";
import { IconButton } from "../iconButton";

interface Props extends TextInputProps {}

export default function Search({...rest}: Props) {
    return (
        <View style={s.container}>
            <View style={s.contain}>
                <TextInput {...rest} style={s.input} />
                <EvilIcons name="search" style={s.search} size={24} color={colors.white} />
                <IconButton icon={<FontAwesome name="sliders" size={20} style={{textAlign: 'center'}} color={colors.white} />} />
            </View>
        </View>
    )
}