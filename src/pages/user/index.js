import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class index extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  componentDidMount() {}

  render() {
    return (
      <View className='user-container'>
        <View className='list'>
          <View className='item'></View>
        </View>
      </View>
    )
  }
}
