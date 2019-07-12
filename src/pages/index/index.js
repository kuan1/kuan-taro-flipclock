import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

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
      </View>
    )
  }
}
