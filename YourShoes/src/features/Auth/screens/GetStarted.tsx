import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonStyle } from '@src/components'
import { COLORS, SIZES } from '@src/constants/theme'
import { RootStackParamList } from '@src/navigation/AuthStack';
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
type GetStartedScreenProp = NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;
const GetStarted = () => {
    const navigation = useNavigation<GetStartedScreenProp>()
  return (
      <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contentView}>
              <Text style={styles.nameShop}>D</Text>
              <Text style={styles.description}>Chào mừng bạn đến với Dreams Shoes</Text>
            <Text style={styles.introduce}>Nếu bạn đang cảm thấy khó khăn với việc chọn cho mình một đôi giày phù hợp , Dreams Shoes sẽ làm điều đó dùm bạn.</Text>
          </View>
          <View style={styles.viewButton}>
              <ButtonStyle btnTitle='Log In' onPress={() => navigation.navigate('SignIn')} styles={styles.signInButton} titleStyle={ styles.titleLogin } />
              <ButtonStyle btnTitle='Sign Up' onPress={() => navigation.navigate('SignUp')} styles={styles.signUpButton} titleStyle={styles.titleSignUp }/>
          </View>
    </ScrollView>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nameShop: {
        fontSize: 72,
        fontWeight: 'bold',
    },
    contentView: {
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        fontSize: SIZES.h2,
        fontWeight:'bold'
    },
    introduce: {
        fontSize: SIZES.h4,
        fontWeight: 'normal',
        paddingHorizontal: 10,
        marginVertical: 25,
        textAlign:'center'
    },
    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInButton: {
        justifyContent: 'center',
        alignItems:'center',
        height: 48,
        width: SIZES.width - 40,
        backgroundColor: COLORS.black,
        borderRadius: SIZES.radius
    },
    signUpButton: {
        height: 48,
        width: SIZES.width - 40,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    titleLogin: {
        color: COLORS.white,
        fontSize: SIZES.body3
    },
    titleSignUp: {
        color: COLORS.black,
        fontSize: SIZES.body3
    }

})