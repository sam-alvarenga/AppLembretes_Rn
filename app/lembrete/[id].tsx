import { View, Text, TextInput, StyleSheet, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack, useLocalSearchParams } from 'expo-router'
import Button from "../../components/Button/button";
import { getLembreteById } from "../../services/lembrete";



export default function LembreteEditScreen() {
    // pegando o quevem como parametro usando o hook useLocalSearchParams = pode pegar um ou array
    const { id } = useLocalSearchParams();

    //Como virá sempre um único e não um array temos que dizer que quermos pegar como uma string
    const idLembrete = parseInt(id as string);

    //Pega o produto pelo id recebido para ter acesso aos seus dados na tela
    const lembrete = getLembreteById(idLembrete);

    //Se não veio produto, retornamos para a página anterior - programação defensiva
    if (!lembrete) return router.back();

    function onChangeText() {

    }
    function handleLembreteAction() {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.productArea}>
                <Stack.Screen options={{ title: lembrete.TituloLembrete }} />
                <View style={styles.detailsArea}>

                    <Text style={styles.title}>Título</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={lembrete.TituloLembrete}
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
                        value={lembrete.CorpoLembrete}
                        style={styles.input}
                    />


                </View>

                <View style={styles.switchArea}>
                    <Text>Não Concluída</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        value={lembrete.StatusLembrete}
                    // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    // ios_backgroundColor="#3e3e3e"
                    // onValueChange={toggleSwitch}
                    // value={isEnabled}
                    />
                    <Text>Concluída</Text>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <Button title="Salvar" function={handleLembreteAction} />
                <Button title="Excluir" function={handleLembreteAction} />
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
        borderWidth: 1,
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