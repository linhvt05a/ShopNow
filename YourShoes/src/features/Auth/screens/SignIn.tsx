import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonStyle, InputStyle, SocialButton } from '@src/components';
import { SOCIAL } from '@src/constants/social';
import { COLORS, SIZES } from '@src/constants/theme';
import { RootStackParamList } from '@src/navigation/AuthStack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type SignInScreenProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = () => {
   const navigation = useNavigation<SignInScreenProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.txtSignIn}>Sign In</Text>
      <View style={styles.viewInput}>
        <InputStyle placeholder='Nhập số điện thoại của bạn'/>
        <InputStyle placeholder='Nhập mật khẩu của bạn' style={ styles.password} />
      </View>
      <ButtonStyle styles={styles.buttonLogin} btnTitle='Log in' titleStyle={styles.txtLogin} />
      <View style={styles.textView}>
        <TouchableOpacity>
          <Text>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewContent}>
         <Text style={styles.social}>hoặc sử dụng</Text>
        <View style={styles.viewButton}>{SOCIAL.map((item) =>
          <SocialButton style={styles.btnSocial} source={item.image} key={item.id} />)}
        </View>
        <View style={styles.viewPass}>
            <Text> Chưa có tài khoản?</Text>
          <ButtonStyle btnTitle=' Đăng ký ngay' titleStyle={styles.titleBtn} onPress={ ()=> navigation.navigate('SignUp')} />
       </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: COLORS.white,
    paddingHorizontal: 20
  },
  txtSignIn: {
    fontSize: SIZES.body2,
    fontWeight: 'bold'
  },
  viewInput: {
    marginTop: 30
  },
  password: {
    marginTop: 20
  },
  buttonLogin: {
    borderWidth: 1,
    borderRadius: SIZES.radius,
    height: 48,
    marginTop: 30,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems:'center'

  },
  txtLogin: {
    fontSize: SIZES.body3,
    fontWeight: '700',
    color: COLORS.white
  },
  textView: {
    alignSelf: 'center',
    marginTop: 8
  },
  social: {
    marginTop: 30,
    alignSelf: 'center',
    color: COLORS.gray
  },
  viewButton: {
    flexDirection: 'row',
    alignSelf:'center'
  },
  btnSocial: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,
    borderRadius: 24,
    marginTop: 24,
    margin: 5
  },
  viewContent: {
    alignSelf:'center'
  },
  viewPass: {
    flexDirection:'row'
  },
  titleBtn: {
    fontSize: SIZES.body4,
    fontWeight:'bold'
  }
});
