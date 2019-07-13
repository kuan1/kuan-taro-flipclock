import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import FlipClock from '../../components/FlipClock'

import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'taro翻页时钟',
    disableScroll: true
  }

  render() {
    return (
      <View className='test-clock-container'>
        <FlipClock />
        <View className='footer'>
          <View className='tip'>
            使用
            <Text className='t'>Taro</Text>
            开发©卢忠宽
          </View>
          <View className='tip'>github-kuan1/kuan-taro-flipclock</View>
        </View>
      </View>
    )
  }
}
