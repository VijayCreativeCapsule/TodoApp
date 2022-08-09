
import {  inject, observer } from 'mobx-react';
import React, {Component} from 'react';
import {Text, View,FlatList,TouchableOpacity,Image} from 'react-native';
import { useStore } from '../../hooks/useStore';

import styles from './TodoRow.style';


const TodoRow =({todo}:any)=>{
    const { todoStore } = useStore();
    return (
        <View style={styles.container}>
				<TouchableOpacity 
                
                onPress={()=>{
                    todo.toggle()
                  }}
                >
					<View style={[styles.circle, todo.finished ? styles.completeCircle : styles.incompleteCircle]} />
				</TouchableOpacity>
				<Text style={[styles.text, todo.finished ? styles.strikeText : styles.unstrikeText]}>
                {todo.title}
				</Text>
				<TouchableOpacity 
                               onPress={()=>{
                                todoStore.deletetodos(todo?.id)
                              }}
                >
					<Image source={require('../../assets/delete_Icon.png')} style={styles.deleteIcon} />
				</TouchableOpacity>
			</View>
          
    )
}

 export default observer(TodoRow)