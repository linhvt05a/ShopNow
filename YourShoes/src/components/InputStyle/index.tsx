import { KeyboardTypeOptions, StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import React from 'react'
import { SIZES } from '@src/constants/theme'

export type InputStyleProps = {
    style?: StyleProp<ViewStyle>
    placeholder?: string
    maxLength?: number,
    secureTextEntry?: boolean
    keyboardType?: KeyboardTypeOptions
}
const InputStyle = ({style, placeholder, maxLength, secureTextEntry, keyboardType }:InputStyleProps) => {
  return (
      <TextInput keyboardType={keyboardType} style={[styles.input, style]} placeholder={placeholder} secureTextEntry={secureTextEntry} maxLength={maxLength} />
  )
}

export default InputStyle

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: SIZES.radius,
        height: 42,
        paddingHorizontal: 10
    },
})