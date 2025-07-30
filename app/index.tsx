import { Text, Image, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Shadow } from "react-native-shadow-2";
import Button from "../components/Button/button";
import  {router}  from "expo-router";

export default function Index() {

    function navigate(){
        router.replace('/list')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Shadow distance={1} offset={[3, 4]} startColor='#888' endColor='#E0EBEE'>
                <Image
                    source={require('../assets/image.png')}
                    style={styles.logo}
                    resizeMode='cover'
                />
            </Shadow>

            <Text style={styles.title}>App Lembretes - 2025 ©</Text>
            <Button title="Entrar" function={navigate}/>

        </SafeAreaView >

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0EBEE',
        gap: 25
    },

    logo: {
        width: 150,
        height: 150,
        elevation: 2,
        borderRadius: 16,
        borderColor: "#226AB2",
        borderWidth: 2
    },

    title: {
        fontWeight: 'bold'
    }









})

