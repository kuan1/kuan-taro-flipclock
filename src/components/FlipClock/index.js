import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import FlipItem from '../FlipItem'

import { getTimeArr } from '../../utils'

import './index.scss'

export default class index extends Component {
  state = {
    timeArr: getTimeArr()
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  stopTimer() {
    clearTimeout(this.timer)
  }
  startTimer = () => {
    this.stopTimer()
    this.timer = setTimeout(() => {
      this.setState({
        timeArr: getTimeArr()
      })
      this.startTimer()
    }, 1000)
  }

  render() {
    const { timeArr } = this.state
    return (
      <View className='clock-container'>
        <FlipItem total={2} current={timeArr[0]} />
        <FlipItem total={9} current={timeArr[1]} />
        <View className='colon' />
        <FlipItem total={5} current={timeArr[2]} />
        <FlipItem total={9} current={timeArr[3]} />
        <View className='colon' />
        <FlipItem total={5} current={timeArr[4]} />
        <FlipItem total={9} current={timeArr[5]} />
      </View>
    )
  }
}
