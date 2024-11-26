import React, { useState} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ExpoRoot } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Chats from './WhatsApp/screens/Chats';
import Statuses from './WhatsApp/screens/Statuses';
import { Ionicons } from '@expo/vector-icons';
import Navigation from './WhatsApp/Navigation';
import Communities from './WhatsApp/screens/Communities';
import Calls from './WhatsApp/screens/Calls';
import Main from './WhatsApp/Main';
import Moody from './Moody/Moody';

import { SafeAreaView } from 'react-native-safe-area-context';
import Shorts from './Shorts';

const Tab=createBottomTabNavigator();
const App = () => {
    const ctx = require.context("/app");  
    return (
    <SafeAreaView>
        <ExpoRoot context={ctx} />
        {/* <Shorts/> */}
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