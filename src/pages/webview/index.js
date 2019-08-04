import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'

export default class Index extends Component {
  config = {
    navigationBarTitleText: ''
  }

  render() {
    const { url } = this.$router.params
    const src = url
      ? decodeURIComponent(url)
      : 'https://www.luzhongkuan.cn/web/kuan/#/life/brain'
    return <WebView className='webview' src={src} />
  }
}
