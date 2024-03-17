import React,{useRef} from "react";
import { FlatList,Animated,Text,View,StyleSheet,PanResponder } from "react-native";
const L32=()=>{
    const translateY=useRef(new Animated.Value(0)).current;
    const panResponder=useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: ()=> true,
            onPanResponderMove: Animated.event(
                [null,{dy: translateY}],
                {useNativeDriver: false}
            ),
            onPanResponderRelease: (e,gestureState)=>{
                Animated.spring(translateY,{
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            },
        })
       
    ).current;
    const renderItem=({item})=>{
        return(
            <Animated.View
            style={[styles.item,{transform: [{translateY}]}]}
            {...panResponder.panHandlers}
            >
                <Text style={styles.text}>Flatlish Items</Text>
            </Animated.View>
        );
    }
    return(
        <View>
            <FlatList
                data={Array.from({length:5},
                    (_,index)=>({key: `${index}`}))}
                renderItem={renderItem}
            />
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
    },
    item:{
        width:200,
        height:50,
        backgroundColor:'#1111AA',
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 5,
    },
    text:{
        fontSize: 15,
        fontWeight:'bold',
    },
});
export default L32;