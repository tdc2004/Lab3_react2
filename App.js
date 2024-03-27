import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store from './lab5/store'
import demReducer from './lab5/reducer'
import { Provider } from 'react-redux'
import GD from './lab5/viewApp'

const App = () => {
  return (
    <Provider store={store}>
      <GD/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})