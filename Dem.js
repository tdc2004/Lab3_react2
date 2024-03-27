import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSeletor,useDispatch} from 'react-redux'
import{tang,giam} from './store'

const Dem = () => {
    const count = useSeletor(state => state.dem);
    const dispatch = useDispatch();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Dem: {count}</Text>
      <Button title='Tang' onPress={()=>dispatch(tang())}/>
      <Button title='Giam' onPress={()=>dispatch(giam())}/>
    </View>
  )
}

export default Dem

const styles = StyleSheet.create({})