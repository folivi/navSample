import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';

import {connect} from 'react-redux';

class SecondTabScreen extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <View style={{flex: 1, padding: 20}}>
            <Text>{JSON.stringify(this.props.profile)}</Text>
        </View>

        )
    }
}

SecondTabScreen.propTypes = {
  profile: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
};
export default connect(mapStateToProps)(SecondTabScreen);
