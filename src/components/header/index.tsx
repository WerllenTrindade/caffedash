import { Image, Text, View } from "react-native";
import { s } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';

export default function Headers(){
    return (
        <View style={s.container}>
            <View>
                <Text style={s.title}>Location</Text>
            <Text style={s.text}>Bilzen, Tanjungbaial <Entypo name="chevron-small-down" size={24} color="#fff" /></Text>
            </View>
            <Image 
            style={s.img}
            source={{uri: "https://avatars.githubusercontent.com/werllentrindade"}} />
            </View>
    )
}