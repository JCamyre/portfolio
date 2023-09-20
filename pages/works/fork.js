import { UnorderedList, ListItem, List } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import WorkLayout from '../../components/layouts/workLayout'
import { useEffect } from 'react'

export default function Lunatrading(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  })

  return (
    <>
      <WorkLayout id='fork' title='Fork' image='/images/fork-logo.jpg' position='Founder'>
        <Paragraph style={{ lineHeight: '32px' }}>
        Introducing Fork, your ultimate companion for effortlessly embracing healthy eating and a seamless dining experience aligned with your wellness goals. Getting started is a breeze – sign up, share health goals, dietary preferences, and macro targets; Fork's expert guidance is also available. Whether it's more protein, fewer carbs, or specific nutrient ratios, Fork supports you at every step. Imagine this: you're out and about, hunger strikes, and you're faced with a sea of dining options. Open the Fork app to find nearby restaurants tailored to you. ML-powered recommendations match dietary restrictions, health objectives, and macro goals for dishes high in protein, low in sugar, and free from additives. Wonder why a dish is recommended? Fork explains, detailing key ingredients, vitamins, and macros. Delve deeper by clicking any dish. Beyond meals, Fork's bookmark feature lets you save favorites. Transcending a mere nutrition app, Fork is your committed companion, seamlessly integrating nutrient-rich dining into daily life. Embark on a flavorful adventure towards a healthier you – let Fork guide you to savor great food while embracing wellness ambitions.
        </Paragraph>
      </WorkLayout>
    </>
  )
}
