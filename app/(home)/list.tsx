import { Text, View, StyleSheet, FlatList } from "react-native";
import LembreteItem from "../../components/lembreteItem/lembreteItem";
import { getAlllembretes } from "../../services/lembrete";


export default function List() {
    const lembretes = getAlllembretes();
    return (
        <View style={styles.container}>
            <FlatList data={lembretes} //informando a fonte de dados da flatlist
                renderItem={({ item }) => <LembreteItem lembrete={item} />} //informando a função que renderiza cada item, estamos usando um arrow function que renderizará cada item, estamos usando um arrow function no caso
                keyExtractor={item => item.LembreteId.toString()}//identificação do index de cada item
                style={styles.list} />

            {/*   <LembreteItem lembrete={lembretes[0]} />
            <LembreteItem lembrete={lembretes[1]}/>
            <LembreteItem lembrete={lembretes[2]}/>
            <LembreteItem lembrete={lembretes[4]}/>
            <LembreteItem lembrete={lembretes[5]}/>
            <LembreteItem lembrete={lembretes[6]}/> */}
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0EBEE",
    },
    list: {
        width: "100%",
        padding: 16,

    }



})


