import { Stack } from 'expo-router';
import { 
    Sora_400Regular,
    Sora_300Light,
    Sora_700Bold,
    Sora_600SemiBold,
    useFonts
} from '@expo-google-fonts/sora'
import * as SplashScreen from 'expo-splash-screen';
import Details from './details/[id]';

// SplashScreen.preventAutoHideAsync();

export default function Layout(){
    const [ fontsLoaded ] = useFonts({
        Sora_400Regular,
        Sora_300Light,
        Sora_700Bold,
        Sora_600SemiBold,
    })

    if(!fontsLoaded){
        console.log('dqwdqwdwq')
    }

    return (
        // <Stack screenOptions={{ headerShown: false}} />
        <Details />
    )
}