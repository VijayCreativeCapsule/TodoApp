import {  inject, observer } from 'mobx-react';
import React, {Component} from 'react';
import {Text, View,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import { useStore } from '../../hooks/useStore';

import TodoRow from '../TodoRow/TodoRow';
import styles from './TodoList.style';


const TodoList:React.FC =()=>{
    const { todoStore } = useStore();
		return (
            <View style={styles.listContainer}>
            {todoStore.totaltodos !== 0 ? (
				<FlatList
              
                data={todoStore?.todos}
                renderItem={({ item }) => {
                  return (
                <TodoRow todo={item} key={item.id} />
                  )
                }}
              />
                
				) : (
					<Text style={styles.noTodoText}>You have nothing TODO !</Text>
				)}
            </View>
		);
	
}

export default observer(TodoList)

