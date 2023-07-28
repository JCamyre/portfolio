import Paragraph from '../../components/paragraph'
import { useEffect } from 'react'
import WorkLayout from '../../components/layouts/workLayout'

export default function Acm(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  }, [props])

  return (
    <>
      <WorkLayout id='bai' link='https://bruincapital.org/' image="/images/bai-logo.png" title='BAI' position='Quantitative Developer and Financial Engineer'>
        <Paragraph>
          BAI!
        </Paragraph>
      </WorkLayout>
    </>
  )
}
