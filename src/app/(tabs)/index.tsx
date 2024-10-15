import Headers from "@/components/header";
import Search from "@/components/search";
import { colors } from "@/styles/colors";
import { Image, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import promotion from '@/assets/promotion.png';

export default function Index() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={{height: '35%', position: 'relative'}} colors={colors.background_linear}>
                <Headers />
                <Search placeholder="Search coffe" placeholderTextColor={colors.text_placeholder}  />
            </LinearGradient>
                <Image source={promotion} />
        </SafeAreaView>
    )
}