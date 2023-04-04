import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';

export default function MainLogicScreen() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in on app start
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = async (email, password) => {
        try {
            const users = [
                { email: 'abc1@gmail.com', password: 'abc1@gmail.com' },
                { email: 'abc2@gmail.com', password: 'abc2@gmail.com' },
                { email: 'abc3@gmail.com', password: 'abc3@gmail.com' },
            ];
            const user = users.find((u) => u.email === email && u.password === password);
            if (user) {
                await AsyncStorage.setItem('token', 'user_token');
                setIsLoggedIn(true);
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            setIsLoggedIn(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <>
            {isLoggedIn ? (
                <WelcomeScreen onLogout={handleLogout} />

            ) : (
                <LoginScreen onLogin={handleLogin} />
            )}
        </>
    );

}