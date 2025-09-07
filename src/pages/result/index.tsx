import { View, Image } from '@tarojs/components'
import {AtButton} from 'taro-ui'
import headerBg from '../../assets/headerBg.jpg'
import GlobalFooter from '../../components'
import question_results from '../../data/question_results.json'
import './index.scss'
import Taro from "@tarojs/taro";

/**
 * 测试结果页面
 */
export default () => {
  const result = question_results[0]
  return (
    <View className='resultPage'>
      <View className='at-article__h1 title'>
        {result.resultName}
      </View>
      <View className='at-article__h2 title'>
        {result.resultDesc}
      </View>
      <AtButton className='enterBtn' type='primary' circle onClick={() => {
        Taro.reLaunch({
          url: '/pages/index/index'
        })
      }}>
        返回主页</AtButton>
      <Image className='headerBg' src={headerBg} />
      <GlobalFooter />
    </View>
  )
}
