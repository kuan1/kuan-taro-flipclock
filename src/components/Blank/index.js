import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import "./index.scss";

export default class index extends Component {
  static defaultProps = {
    src: require("./blank.png"),
    title: "需要先添加任务哦～"
  };

  render() {
    const { src, title } = this.props;
    return (
      <View className="blank-container">
        <Image className="img" mode="aspectFit" src={src} />
        <Text>{title}</Text>
      </View>
    );
  }
}
