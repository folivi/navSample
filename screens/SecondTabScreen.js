import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';

export default class SecondTabScreen extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <View style={{flex: 1, padding: 20}}>
            <Text>SecondTabScreen</Text> 
        </View>

        )
    }
}