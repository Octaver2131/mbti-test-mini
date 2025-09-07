import { View, Image } from '@tarojs/components'
import {AtButton} from 'taro-ui'
import headerBg from '../../assets/headerBg.jpg'
import GlobalFooter from '../../components'
import './index.scss'

/**
 * 主页
 */
export default () => {
  return (
    <View className='indexPage'>
      <View className='at-article__h1 title'>
        MBTI 性格测试
      </View>
      <View className='at-article__h2 title'>
        只要 2 分钟，就能非常准确地判断你的性格
      </View>
      <AtButton className='enterBtn' loading type='primary' circle>开始测试</AtButton>
      <Image className='headerBg' src={headerBg} />
      <GlobalFooter />
    </View>
  )
}
