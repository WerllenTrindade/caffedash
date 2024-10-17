import HeaderDetails from "@/components/headers/details";
import { useGlobalSearchParams } from "expo-router";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

import imagem from '@/assets/item3.png'
import bean from '@/assets/bean.png'
import milk from '@/assets/milk.png'
import { IconButton } from "@/components/iconButton";
import { alingCenter } from "@/styles/alingCenter";
import { colors } from "@/styles/colors";
import { s } from "./styles";
import { Line } from "@/components/line";
import { Size } from "./_components/size";
import Button from "@/components/buttons/button";

const sizes = ['S', 'M', 'L']

export default function Details() {
    const { id } = useGlobalSearchParams();

    const size = ({ item }: { item: string }) => <Size size={item} />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderDetails title="Details" icon={<AntDesign name="hearto" size={24} color="black" />} />

            <View style={{ alignItems: 'center', paddingVertical: 25 }}>
                <Image source={imagem} />
            </View>

            <View style={{ paddingHorizontal: 25 }}>
                <Text style={s.name}>Cappucino</Text>
                <Text style={s.info}>with Chocolate</Text>

                <View style={alingCenter.container}>
                    <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                        <AntDesign name="star" size={24} color={colors.like} />
                        <Text style={s.numberLike}>4.8 <Text style={s.numberParam}>(230)</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <IconButton background="#FFF0F0" icon={<Image source={bean} />} />
                        <IconButton background="#FFF0F0" icon={<Image source={milk} />} />
                    </View>
                </View>

                <Line />
                <View style={{ gap: 10 }}>
                    <Text style={s.title}>Description</Text>
                    <Text style={s.description}>A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. <Text style={s.read}>Read More</Text></Text>

                    <Text style={s.title}>Size</Text>
                    <FlatList
                        data={sizes}
                        numColumns={3}
                        keyExtractor={x => x.toString()}
                        renderItem={size}
                        contentContainerStyle={{ alignItems: 'center', }}
                        columnWrapperStyle={{ gap: 20 }}
                        ListEmptyComponent={() => <View style={{ paddingTop: 20 }} />}
                        ListHeaderComponent={() => <View style={{}} />}
                        stickyHeaderIndices={[0]}
                    />

                    <Line />
                </View>
            </View>
            
            <View style={[s.footer, alingCenter.container]}>
                    <View style={s.containFooter}>
                        <Text style={s.price}>Price</Text>
                        <Text style={s.amount}>$ 4.53</Text>
                    </View>
                    <View style={{width: '  75%'}}>
                        <Button text="Buy Now" />
                    </View>
                </View>

        </SafeAreaView>
    )
}