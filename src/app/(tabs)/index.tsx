import Headers from "@/components/header";
import Search from "@/components/search";
import { colors } from "@/styles/colors";
import { Image, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import promotion from '@/assets/promotion.png';
import { Groups } from "@/components/groups";
import { StatusBar } from "expo-status-bar";

export default function Index() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={{height: '35%', position: 'relative'}} colors={colors.background_linear}>
                <Headers />
                <Search placeholder="Search coffe" placeholderTextColor={colors.text_placeholder}  />
            </LinearGradient>
            <View style={{position: 'relative', bottom: '8%', alignItems: 'center'}}>
                
                <Image source={promotion} style={{borderRadius: 8}} />
            </View>

            <Groups />
        </SafeAreaView>
    )
}