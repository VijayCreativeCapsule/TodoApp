

import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';

import styles from './CardView.style';
import StatBox from '../StatBox/StateBox';
import TodoList from '../TodoList/TodoList';
import { useStore } from '../../hooks/useStore';


const CardView = () => {

    const { todoStore } = useStore();

    const [text, setText] = React.useState<string>('')
    const addTodoHandler = () => {
        if (!text) return
        todoStore.addTodo(text)
        setText('')

    };


    return (
        <View style={styles.card}>


            <View style={{
                flexDirection: 'row', alignItems: 'center', borderBottomColor: '#bbb',
                borderBottomWidth: 1,
            }}>
                <TextInput
                    style={styles.input}
                    placeholder={'Add an item!'}
                    onChangeText={(value) => setText(value)}
                    placeholderTextColor={'#999'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    clearButtonMode={'always'}
                    value={text}
                />
                <TouchableOpacity
                    style={{ backgroundColor: '#34B8A9', paddingVertical: 15, paddingHorizontal: 15, marginHorizontal: 10, borderRadius: 5 }}
                    onPress={addTodoHandler}
                >
                    <Text style={{ color: 'white', fontSize: 23, }}>Add</Text>
                </TouchableOpacity>
            </View>


            {todoStore.totaltodos !== 0 && <StatBox />}

            <TodoList />
        </View>
    );
}


export default observer(CardView);