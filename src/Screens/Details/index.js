import React from "react";
import {View,Image, Text} from 'react-native'
import { useRoute } from "@react-navigation/native";
import estilo from './style'

export default function Details(){

const route = useRoute();
    return(
        <View>
           <Image style = {estilo.imagemFilme} source = {require(`../../Img/${route.params.imagem}`)}/> 
            <Text style = {estilo.tituloFilme} >{route.params.titulo}</Text> 
        </View>
    );
}
