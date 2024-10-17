import ButtonCard from "@/components/buttons/buttonCard";
import { colors } from "@/styles/colors";
import { listaProdutos } from "@/utils/products";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { s } from "./styles";
import { alingCenter } from "@/styles/alingCenter";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

interface Props extends TouchableOpacityProps {
    data: listaProdutos;
}
export function CardProduct({ data, ...rest }: Props) {
    return (
        <View style={s.container}>
            {data.imagem && <Image source={data.imagem} />}
            <View style={s.contain}>
                <Text style={s.title}>{data.nome}</Text>
                <Text style={s.description}>{data.expresso ? 'whith Chcolate' : ''}</Text>
                <View style={[alingCenter.container, s.containPrice]}>
                    <Text style={s.price}>$ {data.preco}</Text>
                    <Link href={`./details/${data.id}`} asChild>
                    <TouchableOpacity {...rest} activeOpacity={0.7} style={s.containerButton}>
                        <AntDesign  style={s.icon} name="plus" size={15} color="#fff" />
                    </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}