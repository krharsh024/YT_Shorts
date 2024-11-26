import React, { useState} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Shorts from './Shorts';


const App = () => {
    return (
    <SafeAreaView>
        <Shorts/> 
    </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
