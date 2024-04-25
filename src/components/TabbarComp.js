import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { ImageBackground } from 'react-native';

const CustomTabBar = (props) => {
    return (
        <ImageBackground
            source={{uri:"https://img.pikbest.com/wp/202344/mix-color-abstract-gradient-texture-with-mixed-colors_9930396.jpg!sw800"}} // Replace with your image path
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <BottomTabBar {...props} />
        </ImageBackground>
    );
};


export default CustomTabBar;