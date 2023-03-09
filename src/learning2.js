/*  Topic:
    
*/

import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Learning2 extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Text>
               {this.state.data.body}
            </Text>
         </View>
      )
   }
}
export default Learning2

const styles = StyleSheet.create({
    hiText: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'white'
    },
    textInput: {
        margin: 5,
        height: 100,
        borderWidth: 1,
        backgroundColor: '#7685ed'
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