import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import moment from 'moment'

import task from '@/utils/task'
import { remainTime } from '@/utils'

import Blank from '@/components/Blank'

import './index.scss'

export default class User extends Component {
  config = {
    navigationBarTitleText: '我的'
  }
  static options = {
    addGlobalClass: true
  }

  state = {
    list: []
  }

  componentDidShow() {
    this.fetchData()
  }

  onShareAppMessage() {
    return {}
  }

  fetchData() {
    const list = task.get()
    this.setState({
      list: list.map(item => {
        const { status, text } = this.getStatus(item)
        return {
          ...item,
          status,
          text
        }
      })
    })
  }

  getStatus({ date, time, status }) {
    if (status === 2) {
      return {
        status: 2,
        text: '已完成'
      }
    }
    return moment(`${date} ${time}`).isBefore(moment())
      ? {
          status: 1,
          text: '已逾期'
        }
      : {
          status: 0,
          text: '进行中'
        }
  }

  remove(i) {
    const { list } = this.state
    list.splice(i, 1)
    this.setState({
      list
    })
    task.set(list)
    Taro.showToast({
      title: '删除成功'
    })
  }

  showAction(item, i) {
    // 已经完成
    if (item.status === 2) {
      Taro.showActionSheet({
        itemList: ['删除'],
        success: () => {
          this.remove(i)
        }
      })
    } else {
      Taro.showActionSheet({
        itemList: ['完成', '删除'],
        success: res => {
          if (res.tapIndex == 0) {
            const { list = [] } = this.state
            list[i].status = 2
            list[i].text = '已完成'
            list[i].successTime = moment().format('YYYY-MM-DD HH:mm')
            this.setState({
              list: [...list]
            })
            task.set(list)
            Taro.showToast({
              title: '已设置完成'
            })
          } else {
            this.remove(i)
          }
        }
      })
    }
  }

  render() {
    const { list = [] } = this.state
    const classMap = {
      0: 'doing',
      1: 'expired',
      2: 'done'
    }

    if (!list.length) return <Blank />

    return (
      <View className='user-container'>
        <View className='list'>
          {list.map((item, i) => (
            <View
              key
              onClick={this.showAction.bind(this, item, i)}
              className='item'
            >
              <View>
                {item.name || '匿名任务'}{' '}
                <Text className='time'>
                  {item.successTime
                    ? `完成于${item.successTime}`
                    : item.status !== 0
                    ? `${item.date} ${item.time}`
                    : '剩余' +
                      remainTime(moment(`${item.date} ${item.time}`).toDate())}
                </Text>
              </View>
              <View className={`status ${classMap[item.status]}`}>
                {item.text}
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
