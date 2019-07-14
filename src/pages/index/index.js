import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Picker } from '@tarojs/components'
import moment from 'moment'

import task from '@/utils/task'

import FlipClock from '../../components/FlipClock'

import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '添加',
    disableScroll: true
  }

  constructor(props) {
    super(props)
    const [date, time] = moment()
      .add(10, 'minutes')
      .format('YYYY-MM-DD HH:mm')
      .split(' ')
    this.state = {
      data: {
        name: '',
        date,
        time
      }
    }
  }

  componentDidShow() {
    this.refreshTime()
  }

  refreshTime() {
    const [date, time] = moment()
      .add(10, 'minutes')
      .format('YYYY-MM-DD HH:mm')
      .split(' ')
    this.setState({
      data: {
        name: '',
        date,
        time
      }
    })
  }

  change = (key, e) => {
    const { data } = this.state
    data[key] = e.detail.value
    this.setState({
      data
    })
  }

  submit = () => {
    task.add(this.state.data)
    Taro.switchTab({
      url: '/pages/user/index'
    })
  }

  renderAction() {
    const { data } = this.state
    return (
      <View className='action-container'>
        <View className='form-item'>
          <Input
            maxLength={8}
            onInput={this.change.bind(this, 'name')}
            value={data.name}
            className='input'
            placeholder='匿名任务'
          />
        </View>
        <Picker
          onChange={this.change.bind(this, 'date')}
          value={data.date}
          mode='date'
        >
          <View className='form-item'>{data.date}</View>
        </Picker>
        <Picker
          onChange={this.change.bind(this, 'time')}
          value={data.time}
          mode='time'
        >
          <View className='form-item'>{data.time}</View>
        </Picker>
        <View className='buttons'>
          <View onClick={this.submit} className='btn countdown-btn'>
            开始
          </View>
        </View>
      </View>
    )
  }

  renderFooter() {
    return (
      <View className='footer'>
        <View className='tip'>
          使用
          <Text className='t'>Taro</Text>
          开发©卢忠宽
        </View>
        <View className='tip'>github-kuan1/kuan-taro-flipclock</View>
      </View>
    )
  }

  render() {
    return (
      <View className='test-clock-container'>
        <View className='clock-container'>
          <FlipClock />
        </View>
        {this.renderAction()}
        {this.renderFooter()}
      </View>
    )
  }
}
