import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';

import I18n from '../src/locales/i18n';


export default class FirstTabScreen extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1, padding: 20}}>                
                <Text>FirstTabScreen</Text> 
            </View>
        )
    }
}