import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import FlipClock from '../../components/FlipClock'

import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '翻页时钟'
  }

  render() {
    return (
      <View className='test-clock-container'>
        <FlipClock />
        <View className='footer'>
          <View>版权所有©卢忠宽</View>
          <View className='tip'>
            使用
            <Text className='t'>Taro</Text>
            开发小程序翻页日历
          </View>
        </View>
      </View>
    )
  }
}
