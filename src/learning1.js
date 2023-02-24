/*  Topic:
        Text
        Image
        View
        SafeAreaView
        Pressable --- It's better than Touchables
        Alert
*/

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity, Alert, TextInput, } from 'react-native';


export default function Learning1() {

    let str = "Hi";

    const [fieldText, onChangeText] = useState('');

    const pressButton = () => Alert.alert("Seriously!!!", "You Clicked.....");
    const pressLongButton = () => console.log("Clicked Long");
    const alertButton = () => {
        Alert.alert("Learning Alert", "This is a demo. Nothing to Worry!", [
            {
                text: "Thanks, I feel safe", onPress: () => {
                    Alert.alert('mUahahaha', 'I tricked you. You are hacked', [{ text: "PLEASE DON\'T DO IT" }]);
                }

            },
            {
                text: "No, I am in Matrix", onPress: () => Alert.alert('Goodbye', 'I can\'t make you understand', [
                    { text: "You are a con-man" }
                ])
            }
        ])
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.hiText}>{str}</Text>
            <Pressable onPress={pressButton} onLongPress={pressLongButton}>
                <Text> What am I? {'\n'}</Text>
            </Pressable>
            <TouchableOpacity>
                <Image
                    blurRadius={1}
                    fadeDuration={1000}
                    source={{ width: 200, height: 300, uri: "https://picsum.photos/id/237/200/300" }}
                // source={require('./assets/favicon.png')}
                />
            </TouchableOpacity>
            <TextInput style={styles.input}
                value={fieldText}
                onChangeText={onChangeText}
                placeholder="Enter the answer" />
            <Button title={'Click Here'} onPress={pressButton} color={'dodgerblue'} />
            <Button title={'Alert Button'} onPress={alertButton} color={'#f5695f'} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    hiText: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'dodgerblue'
    },
    container: {
        padding: 5,
        flex: 1,
        backgroundColor: 'white',
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

