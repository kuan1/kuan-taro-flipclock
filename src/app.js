import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: ["pages/index/index", "pages/user/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#ffffff",
      navigationBarTitleText: "翻页时钟",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      color: "#666666",
      selectedColor: "#2b2f42",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./images/tabbar/home.png",
          selectedIconPath: "./images/tabbar/home_active.png",
          text: "添加"
        },
        {
          pagePath: "pages/user/index",
          iconPath: "./images/tabbar/user.png",
          selectedIconPath: "./images/tabbar/user_active.png",
          text: "我的"
        }
      ]
    }
  };

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
