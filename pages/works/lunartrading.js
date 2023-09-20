import { UnorderedList, ListItem, List } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import WorkLayout from '../../components/layouts/workLayout'
import { useEffect } from 'react'

export default function Lunartrading(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  })

  return (
    <>
      <WorkLayout id='lunartrading' title='Lunar Trading' image='/images/lunar-trading-logo.png' position='Co-founder'>
        <Paragraph style={{ lineHeight: '32px' }}>
        At Lunar Trading, we are on a mission to democratize finance and empower young investors, particularly college students and individuals in their early to mid-20s. Our innovative app harnesses the power of AI to provide a tailored investment experience.
        </Paragraph>
      </WorkLayout>
    </>
  )
}
