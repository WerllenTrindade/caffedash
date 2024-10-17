import { ReactElement } from "react";
import { View } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";

interface Props {
    background?: string;
    icon: ReactElement
}
export function IconButton({background = colors.primary, icon}: Props){
    return (
        <View style={[s.container, { backgroundColor: background}]}>
        {icon} 
        </View>
    )
}