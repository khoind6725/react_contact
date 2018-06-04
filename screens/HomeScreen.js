import React, { Component } from 'react';
import { styles } from '../contants/styles';
import { Container, Content, List, ListItem, Text } from 'native-base';
import Contacts from 'react-native-contacts';

console.ignoredYellowBox = ['Remote debugger'];

export default class HomeScreen extends Component {

    render() {
        var items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];
        Contacts.getAll((err, contacts) => {
            if (err) throw err;
            console.log(contacts)
        })

        return (
            <Container>
                <Content>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}