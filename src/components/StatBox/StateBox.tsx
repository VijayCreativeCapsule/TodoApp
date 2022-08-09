import {  inject, observer } from 'mobx-react';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { useStore } from '../../hooks/useStore';

import styles from './StatBox.style';


const StatBox =()=>{
    const { todoStore } = useStore();
		return (
			<View style={styles.container}>
				<View style={styles.activeTodoView}>
					<Text style={styles.activeTextLabel}>Total</Text>
					<Text style={styles.activeText}>{todoStore.totaltodos}</Text>
				</View>
				<View style={styles.remainingTodoView}>
					<Text style={styles.remainingTextLabel}>Remaining</Text>
					<Text style={styles.remainingText}>{todoStore.unfinishedTodoCount}</Text>
				</View>
			</View>
		);
	
}

export default observer(StatBox)