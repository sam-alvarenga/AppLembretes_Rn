import { Text, View, StyleSheet } from "react-native";
import LembreteItem from "../../components/lembreteItem/lembreteItem";


export default function List() {

    return (
        <View style={styles.container}>
            <LembreteItem />
            <LembreteItem />
            <LembreteItem />
            <LembreteItem />
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: "center",
       alignItems: "center"
    },



})

