/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends Component {
	render() {
		return (
			<Container>
				<Tabs>
					<Tab heading={<TabHeading><Icon name="list" /><Text>List Contact</Text></TabHeading>}>
						<HomeScreen />
					</Tab>
					<Tab heading={<TabHeading><Icon name="settings" /><Text>Setting</Text></TabHeading>}>
						<SettingsScreen />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}
