import { View } from '@tarojs/components'
import {AtButton, AtRadio} from 'taro-ui'
import GlobalFooter from '../../components'
import questions from '../../data/questions.json'
import './index.scss'
import {useEffect, useState} from "react";

/**
 * 答题
 */
export default () => {

  // 当前题目序号，从 1 开始
  const [current, setCurrent] = useState<number>(1);
  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const questionOptions = currentQuestion.options.map(option => {
    return { label: `${option.key}, ${option.value}`, value: option.key};
  })
  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<String>();
  // 回答列表
  const [answerList] = useState<String[]>([])
  // 当题目序号改变时，更新当前题目
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1])
  }, [current]);

  return (
    <View className='doQuestionPage'>
        {JSON.stringify(answerList)}
      <View className='at-article__h2 title'>
          {current}. {currentQuestion.title}
      </View>
      <View className='options-wrapper'>
        <AtRadio options={questionOptions} value={currentAnswer} onClick={(value) => {
            setCurrentAnswer(value);
            answerList[current - 1] = value;
          }}
        />
      </View>
      {
        current == questions.length && (
          <AtButton className='controlBtn' type='primary' circle  disabled={!currentAnswer} onClick={() => {
            // TODO: 跳转到结果页面
            }}
          >查看结果</AtButton>
        )
      }
      {
        current < questions.length && (
          <AtButton className='controlBtn' circle onClick={() => setCurrent(current + 1)} type='primary' disabled={!currentAnswer}>下一题</AtButton>
        )
      }
      {
        current > 1 && (
          <AtButton className='controlBtn' circle onClick={() => setCurrent(current - 1)}>上一题</AtButton>
        )
      }

      <GlobalFooter />
    </View>
  )
}
