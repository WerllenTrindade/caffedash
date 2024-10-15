import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { coffeeGroup, listaGrupo } from "@/utils/groups";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export function Groups(){
    const [grupoSelecionado, setGrupoSelecionado] = useState(0);

    function selecionarGrupo(item: number){
        setGrupoSelecionado(item);
    }

    const listaGrupo = ({item}: {item: listaGrupo}) => {
        return (
            <TouchableOpacity 
            onPress={() => selecionarGrupo(item.id)}
            style={item.id == grupoSelecionado ? {backgroundColor: colors.primary, borderRadius: 8, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                
                elevation: 2,} : {}}>
                <Text style={[item.id == grupoSelecionado ? {color: colors.white} : { color: colors.title }, {fontFamily: fontFamily.regular, padding: 10}]}>
                {item.nome}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{bottom: 25}}>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={coffeeGroup} 
            renderItem={listaGrupo}
            contentContainerStyle={{
                gap: 20,
                paddingHorizontal: 20
            }}
            />
        </View>
    )
}