import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { Image, Platform } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayouts(){
    return <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tab_inative,
        tabBarStyle: {
            borderTopColor: colors.text
        }
    }}>
        <Tabs.Screen name="index" 
        options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="home" size={size} color={color} />
            )
        }} />
        <Tabs.Screen name="cart" 
        options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="shoppingcart" size={size} color={color} />
            )
        }} />
        <Tabs.Screen name="likes" 
        options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="hearto" size={size} color={color} />
            )
        }} />
        <Tabs.Screen name="notification" 
        options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="notifications" size={size} color={color} />
            ),
            tabBarBadge: 3,
            tabBarBadgeStyle: {
                backgroundColor: colors.primary,
                borderRadius: 5,
                color: colors.white,
                paddingTop: Platform.OS === 'ios' ? 2 : 0
            }
        }} />
    </Tabs>
}