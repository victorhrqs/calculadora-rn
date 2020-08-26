import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

export default props => {

  const [displayValue, setDisplayValue] = useState('0')

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})