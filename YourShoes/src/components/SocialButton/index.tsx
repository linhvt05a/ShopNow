import React from 'react'
import { Image, ImageRequireSource, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'

export type SocialButtonProps = {
    onPress?: () => void
    source: ImageRequireSource
    style?: StyleProp<ViewStyle>
}
const SocialButton = ({onPress, source, style}:SocialButtonProps) => {
  return (
      <TouchableOpacity onPress={onPress} style={style}>
      <Image source={source}/>
    </TouchableOpacity>
  )
}

export default SocialButton

const styles = StyleSheet.create({})