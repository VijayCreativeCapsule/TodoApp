
import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {inject, observer} from 'mobx-react';

import styles from './MainContainer.style';

// import CardView from '../../Components/CardView/CardView';

type Props = {
    children: JSX.Element,
  };


const  MainContainer =({children}:Props)=>{
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.appTitle}>Todo App</Text>
            {
                children
            }
        </View>
    );
}
		

export default MainContainer