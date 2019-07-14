import Taro from '@tarojs/taro'

const key = 'task'

export default {
  get() {
    const list = Taro.getStorageSync(key)
    return list || []
  },
  set(list = []) {
    Taro.setStorageSync(key, list)
    return list
  },
  add(item) {
    const list = this.get()
    list.push(item)
    this.set(list)
    return list
  },
  clear() {
    Taro.removeStorageSync(key)
    return []
  }
}
