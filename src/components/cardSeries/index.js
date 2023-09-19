import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from '../cardFilmes/style';

export default function CardSeries({titulo,nota,imagem}){
    return(
        
        <TouchableOpacity style ={styles.containerFilmes}>
            <Image style ={styles.imagemFilme} source = {require(`../../Img/${imagem}`)}/>
            <Text style ={styles.tituloFilmes}> {titulo} </Text>
            <Text style ={styles.notaFilmes}> {nota} </Text>

        </TouchableOpacity>
    );  
}