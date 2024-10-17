import { Image, Text, View } from "react-native";
import { s } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/styles/colors";
import Search from "@/components/search";

export default function HeaderHome() {
    return (
        <LinearGradient style={s.linearGradient} colors={colors.background_linear}>
            <View style={s.container}>
                <View>
                    <Text style={s.title}>Location</Text>
                    <Text style={s.text}>Bilzen, Tanjungbaial <Entypo name="chevron-small-down" size={24} color="#fff" /></Text>
                </View>
                <Image
                    style={s.img}
                    source={{ uri: "https://avatars.githubusercontent.com/werllentrindade" }} />
            </View>
            <View style={{paddingBottom: '5%'}}>
            <Search placeholder="Search coffe" placeholderTextColor={colors.text_placeholder} />
            </View>
        </LinearGradient>
    )
}

