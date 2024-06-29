import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export const HomeScreen =()=>{
    return(
        <View style={styles.homeCon}>
            <View style={styles.header}>
                <Image source={require('../assets/images/Menu.png')} style={styles.menu}></Image>
                <Image source={require('../assets/images/Logo.png')} style={styles.logo}></Image>
                <Image source={require('../assets/images/Search.png')} style={styles.search}></Image>
                <Image source={require('../assets/images/shoppingBag.png')} style={styles.shop}></Image>
            </View>
            <View style={styles.subHeader}>
                <Text style={styles.ourSt}>O U R  S T O R Y</Text>
                <View style={styles.subIcon1}>
                <Image source={require('../assets/images/OIP1.png')} style={styles.icon}></Image>
                </View>
                <View style={styles.subIcon2}>
                <Image source={require('../assets/images/OIP2.png')} style={styles.icon}></Image>
                </View>
            </View>

            <View style={styles.prodCon}>
                <View style={styles.products}>
                    <View style={styles.dress1}>
                    <Image source={require('../assets/images/dress1.png')} style={styles.hI}></Image>
                    <Text style={styles.types}>Office Wear</Text>
                    <Text style={styles.brand}>reversible angora cardigan</Text>
                    <Text style={styles.price}>$120</Text>

                    </View>
                    <View style={styles.dress2}>
                    <Image source={require('../assets/images/dress2.png')} style={styles.hI}></Image>
                    <Text style={styles.types}>Black</Text>
                    <Text style={styles.brand}>reversible angora cardigan</Text>
                    <Text style={styles.price}>$120</Text>
                    </View>

                </View>

            </View>

        </View>

    );
};

const styles= StyleSheet.create({
    homeCon:{
        top: 50,
        left:20
    },
    header:{
        flexDirection:'row',
    },
    menu:{
        width:30,
        height:30,
        left:5
    },
    shop:{
        left:160,
        width:30,
        height:30
    },
    search:{
        left:140,
        width:30,
        height:30

    },
    logo:{
        left:80,
        width:100,
        height:40,
        bottom:10
    },
    subHeader:{
        flexDirection:'row',
        top: 30
    },
    ourSt:{
        fontSize:23,
        fontWeight:'bold'
        
    },
    subIcon1:{
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        left:70,
        bottom:9

    },
    subIcon2:{
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        left:86,
        bottom:9

    },
    icon:{
        width: 30, 
    height: 30,
    },
    prodCon:{
        top:50
    },
    products:{
        flexDirection:'row'
    },
    dress2:{
        left:25
    },
    types:{
        fontSize:18

    },
    brand:{
        fontSize:14

    },
    price:{
        fontSize:20,
        color:'orange'

    },

});