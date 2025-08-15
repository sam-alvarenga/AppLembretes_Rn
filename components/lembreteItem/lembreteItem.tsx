import { Pressable, Image, Text, View, StyleSheet, Switch } from "react-native";
import { Lembrete } from "../../types/lembrete";
import { Link } from "expo-router";

type Props = {
    lembrete: Lembrete
}

export default function LembreteItem({ lembrete }: Props) {
    return (

        <Link href={`/lembrete/${lembrete.LembreteId}`} asChild>

            <Pressable style={styles.containerLembrete}>
                <View style={styles.lembreteItem}>
                    <Text style={styles.lembreteTitle}>{lembrete.TituloLembrete}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#ccc' }}
                        value={true}
                    // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    // ios_backgroundColor="#3e3e3e"
                    // onValueChange={toggleSwitch}
                    // value={isEnabled}
                    />
                </View>

            </Pressable>
        </Link>
    );

}

const styles = StyleSheet.create({
    containerLembrete: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",       
        flexDirection: "row",


    },

    lembreteItem: {
        width: "90%",
        height: "80%",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },

    lembreteTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#226AB2",


    },

})

