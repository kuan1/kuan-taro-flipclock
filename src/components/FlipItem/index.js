import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class index extends Component {
  static defaultProps = {
    total: 9,
    current: 0
  }
  constructor(props) {
    super(props)
    this.state = {
      before: props.total === props.current ? -1 : props.total,
      isPlay: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const { current } = nextProps
    if (current !== this.props.current) {
      this.setState({
        before: this.props.current,
        isPlay: true
      })
    }
  }

  render() {
    const { total, current } = this.props
    const { isPlay, before } = this.state
    return (
      <View className={isPlay ? 'play' : ''}>
        <View className='flip'>
          {[...Array(total + 1).keys()].map(item => (
            <View
              className={`item ${current === item ? 'active' : ''} ${
                before === item ? 'before' : ''
              }`}
              key={item}
            >
              <View className='up'>
                <View className='shadow' />
                <View className='inn'>{item}</View>
              </View>
              <View className='down'>
                <View className='shadow' />
                <View className='inn'>{item}</View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
