import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'

const L31 = () => {
    const position = useRef(new Animated.ValueXY()).current; // Lay vi tri hien tai
    const windowHeight = Dimensions.get("window").height;
    const startAnimation = () => {
        const randomY = Math.floor(Math.random() * windowHeight);
        Animated.timing(position, { // bat dau di chuyen tu vi tri ban dau
            toValue: { x: 0, y: randomY }, // di chuyen theo truc Y
            duration: 3000, // thoi gian di chuyen 3s
            useNativeDriver: false, //
        }).start(() => startAnimation()) // lap di lap lai
    }
    useEffect(() => {
        startAnimation();
    })
    return (
        <View style={styles.container}>
             <Animated.View style={[styles.box, position.getLayout()]} />
        </View>
    )
}

export default L31

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    box:{
        width:50,
        height:50,
        backgroundColor:'red',
    },
})