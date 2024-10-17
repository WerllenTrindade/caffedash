import { Image, ImageSourcePropType, Text, View } from "react-native";
import { s } from "./styles";
import Octicons from '@expo/vector-icons/Octicons';
import { alingCenter } from "@/styles/alingCenter";

interface Props {
    title: string,
    icon?: JSX.Element
}

export default function HeaderDetails({title, icon}: Props) {
    return (
            <View style={[alingCenter.container, s.container]}>
                <Octicons name="chevron-left" size={24} color="black" />
                <Text style={s.title}>{title}</Text>
                {icon}
            </View>
    )
}

