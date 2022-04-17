import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

export type ButtonStyleProps ={
    onPress?: () => void
    btnTitle?: string
    styles?: StyleProp<ViewStyle>
    titleStyle?: StyleProp<TextStyle>
}
const ButtonStyle = ({ onPress, btnTitle, styles, titleStyle}: ButtonStyleProps) => {
    return (
       <TouchableOpacity onPress={onPress} style={styles}> 
          <Text style={titleStyle}>{btnTitle}</Text>
      </TouchableOpacity>
    )
}

export default ButtonStyle

const styles = StyleSheet.create({})