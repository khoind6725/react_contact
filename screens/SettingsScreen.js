import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { styles } from '../contants/styles';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Setting Screen</Text>
            </View>
        );
    }
}