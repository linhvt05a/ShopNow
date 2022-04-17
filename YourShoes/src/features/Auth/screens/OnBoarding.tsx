import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';
import { ICONS } from '@src/constants/theme';

type OnBoardingScreenProp = NativeStackNavigationProp<RootStackParamList, 'OnBoarding'>;
const DATA = [
    {
      backgroundColor: '#1a0d00',
      image: <Image source={ICONS.shoeIcon} />,
      title: 'Dreams Shoes',
      subtitle: 'Shop giày dép nam - nữ T&L với phương châm "Đồng hành cùng phong cách thời trang của bạn" sẽ là nơi mua sắm an toàn và uy tín.',
    },
    {
      backgroundColor: '#1a0d00',
      image: <Image source={ICONS.shoppingBagIcon} />,
      title: 'Shopping Bag',
      subtitle: 'Thêm bất cứ thứ gì mà bạn muốn vào giỏ hàng một cách nhanh chóng và có thể đặt hàng ngay nếu bạn muốn ',
    },
    {
      backgroundColor: '#1a0d00',
      image: <Image source={ICONS.quickSearchIcon} />,
      title: 'Quick Search',
      subtitle: 'Cho phép bạn tìm kiếm nhanh các sản phẩm mà mình muốn mua một cách nhanh chóng và bạn có thể tìm bằng mã sản phẩm đã biết trước từ T-L Shop.',
    },
    {
      backgroundColor: '#1a0d00',
      image: <Image source={ICONS.wishListIcon} />,
      title: 'Wishlist',
      subtitle: 'Chức năng cho phép bạn tạo ra 1 dach sách các sản phẩm mà mình yêu thích bằng cách Add từng sản phẩm vào wishlist này',
    },
    {
      backgroundColor: '#1a0d00',
      image: <Image source={ICONS.trackingOrderIcon} />,
      title: 'Order Tracking',
      subtitle: 'Theo dõi một gói hàng của bạn bằng cách sử dụng công cụ theo dõi bưu kiện của chúng tôi để bạn có thể theo dõi các bưu kiện một cách liền mạch của bất kỳ đơn vị chuyển phát nào.',
    },
    {
      backgroundColor: '#1a0d00',
      image: <Image source={ICONS.alarmIcon} />,
      title: 'Notifications',
      subtitle: 'Bạn có thể dễ dàng nhận thông tin từ các sản phẩm khuyến mại và các đợt giảm giá trong tháng cũng như flash sale , black friday ',
    },
    {
      backgroundColor: '#1a0d00',
      image: <Image source={ICONS.paymentIcon} />,
      title: 'Payment',
      subtitle: 'Các phương thức thanh toán được chấp nhận có thể bao gồm tiền mặt, thẻ quà tặng, thẻ tín dụng, thẻ trả trước, thẻ ghi nợ hoặc thanh toán di động.',
    },
]
const OnBoarding = () => {
    const navigation = useNavigation<OnBoardingScreenProp>()
    const ShowDoneButton = () => {
        return(
             <TouchableOpacity style={styles.doneButton} onPress={()=> navigation.navigate('GetStarted')}>
                 <Image source={ICONS.nextIcon}/>
             </TouchableOpacity>
        )
    }
  return (
    <Onboarding
    pages={DATA}
    skipLabel=''
    nextLabel={''}
    DoneButtonComponent = {ShowDoneButton}
  />
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    doneButton : {
        marginRight: 20
    }
})