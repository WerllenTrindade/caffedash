import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { coffeeGroup, listaGrupo } from "@/utils/groups";

import { s } from "./styles";

export function Groups() {
    const [grupoSelecionado, setGrupoSelecionado] = useState(0);

    function selecionarGrupo(item: number) {
        setGrupoSelecionado(item);
    }

    const listaGrupo = ({ item }: { item: listaGrupo }) => {
        return (
            <TouchableOpacity
                onPress={() => selecionarGrupo(item.id)}
                style={item.id == grupoSelecionado ? s.buttonActive : {}}>
                <Text style={[s.text, item.id == grupoSelecionado ? s.textSelect : s.textNoSelect]}>
                    {item.nome}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
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