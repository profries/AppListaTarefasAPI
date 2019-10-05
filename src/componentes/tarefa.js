import React from 'react';
import {Text, View} from 'react-native';

const TarefaScreen = ({navigation}) => {
    console.log(navigation);
    return (
        <View>
            <Text>Hello {navigation.state.params.id}</Text>
        </View>
    )
}

export default TarefaScreen;