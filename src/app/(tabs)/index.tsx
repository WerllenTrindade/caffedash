
import { colors } from "@/styles/colors";
import { FlatList, View } from "react-native";
import { Groups } from "@/components/groups";
import { coffeProdutos, listaProdutos } from "@/utils/products";
import { CardProduct } from "@/components/cards/cardProduct";
import GeneralStatusBarColor from "@/components/StatusBarIOS/GeneralStatusBarColor";
import HeaderHome from "@/components/headers/home";

export default function Index() {

    const renderItem = ({ item }: {item: listaProdutos}) => <CardProduct data={item} />
    
    return (
        <View style={{ flex: 1, backgroundColor: colors.background}}>
            <GeneralStatusBarColor backgroundColor={'#131313'}  barStyle="light-content"/>
            <HeaderHome/>
            <Groups />
            
            <FlatList
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                data={coffeProdutos}
                renderItem={renderItem}
                contentContainerStyle={{ gap: 24, alignItems: 'center', }}
                columnWrapperStyle={{ gap: 55 }}
                ListEmptyComponent={() => <View style={{paddingTop: 20}} />}
                ListHeaderComponent={()=><View style={{}}/>}
                stickyHeaderIndices={[0]}
            />
        </View>
    )
}