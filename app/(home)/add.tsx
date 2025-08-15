import { View, Text, TextInput, StyleSheet, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack, useLocalSearchParams } from 'expo-router'
import Button from "../../components/Button/button";
import { getLembreteById } from "../../services/lembrete";




export default function Add() {

    function onChangeText() {

    }
    function handleLembreteAction() {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.productArea}>
                <Stack.Screen options={{ title: "Adiconar Lembrete"}} />
                <View style={styles.detailsArea}>

                    <Text style={styles.title}>Título</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        /* value={} */
                        textAlign='center'
                    />

                    <Text style={styles.description}>Descrição</Text>
                    <TextInput
                        editable={true}
                        multiline={true}
                        numberOfLines={6}
                        maxLength={60}
                        // onChangeText={text => onChangeText(text)}
                        onChangeText={onChangeText}
                        /* value={} */
                        style={styles.input}
                    />


                </View>

                <View style={styles.switchArea}>
                    <Text>Não Concluída</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                       /*  value={} */
                    // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    // ios_backgroundColor="#3e3e3e"
                    // onValueChange={toggleSwitch}
                    // value={isEnabled}
                    />
                    <Text>Concluída</Text>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <Button title="Adicionar" function={handleLembreteAction} />
               
            </View>
        </SafeAreaView>

    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0EBEE',


    },

    productArea: {
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: '#226AB2',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
        width: '80%',


    },

    detailsArea: {
        /* justifyContent: 'center',
        alignItems: 'center', */
        width: '80%',
        gap: 20

    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#226AB2'

    },

    description: {


    },

    input: {
        borderWidth: 1,
        borderColor: '#226AB2',
        borderRadius: 10,

    },

    switchArea: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginTop:15


    },

    buttonArea: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    }




})