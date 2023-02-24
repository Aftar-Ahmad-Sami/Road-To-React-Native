/*  Topic:
    
*/

import { SafeAreaView,StyleSheet,Text} from "react-native";

export default function Learning2(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.hiText}>
                Hello!
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    hiText: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'white'
    },
    container: {
        padding: 5,
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        height: 40,
        margin: 0,
        borderWidth: 1,
        padding: 10,
    },
});