import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonStyle, InputStyle, SocialButton } from '@src/components';
import { SOCIAL } from '@src/constants/social';
import { COLORS, SIZES } from '@src/constants/theme';
import { RootStackParamList } from '@src/navigation/AuthStack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type SignUpScreenProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUp = () => {
   const navigation = useNavigation<SignUpScreenProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.txtSignIn}>Tạo tài khoản Dreams Shoes ngay nào</Text>
      <View style={styles.viewInput}>
        <InputStyle keyboardType='phone-pad' placeholder='Nhập số điện thoại của bạn' style={ styles.password}/>
        <InputStyle keyboardType='email-address' placeholder='Nhập email mail cá nhân của bạn' style={ styles.password} />
        <InputStyle placeholder='Tạo một mật khẩu ít nhất 5 ký tự ' style={ styles.password} secureTextEntry/>
        <InputStyle placeholder='Nhập lại mật khẩu của bạn' style={ styles.password} secureTextEntry/>
      </View>
      <ButtonStyle styles={styles.buttonLogin} btnTitle='Đăng ký' titleStyle={styles.txtLogin} />
      <View style={styles.textView}>
        <Text style={styles.txtNormal}>Bằng việc Đăng ký, bạn đã đồng ý với
          <TouchableOpacity style={styles.btnText}>
            <Text style={styles.txtPolicy}> Điều khoản sử dụng</Text>
          </TouchableOpacity>của <Text style={{fontWeight:'bold'}}>Dreams Shoes</Text></Text>
      </View>
      <View style={styles.viewContent}>
         <Text style={styles.social}>hoặc sử dụng</Text>
        <View style={styles.viewButton}>{SOCIAL.map((item) =>
          <SocialButton style={styles.btnSocial} source={item.image} key={item.id} />)}
        </View>
        <View style={styles.viewPass}>
            <Text> Bạn đã có tài khoản?</Text>
          <ButtonStyle btnTitle=' Đăng nhập' titleStyle={styles.titleBtn} onPress={()=> navigation.navigate('SignIn')} />
       </View>
      </View>
    </View>
  );
};

export default SignUp;

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
    marginTop: 20
  },
  password: {
    marginTop: 20,
    borderColor: COLORS.gray,
    height: 42
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
    marginTop: 10
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
  },
  txtPolicy: {
    fontWeight: 'bold',
    textDecorationLine:'underline',
    color: COLORS.blue,
  },
  txtNormal: {
   
  },
  btnText: {
  }
});
