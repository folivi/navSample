import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1, padding: 20, backgroundColor: '#000'}}>
                <Text style={{color: 'red'}}>SideMenu</Text> 
            </View>
        )
    }
}