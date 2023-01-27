/*  Topic:
        Text
        Image
        View
        SafeAreaView
*/

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function Learnig1() {
    return (
        <SafeAreaView style={styles.container}>

            <Text>{'Hi\n'}</Text>
            <Text> What am I? {'\n'}</Text>
            <Image
                blurRadius={2}
                fadeDuration={1000}
                source={{ width: 200, height: 300, uri: "https://picsum.photos/id/237/200/300" }}
            // source={require('./assets/favicon.png')}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});