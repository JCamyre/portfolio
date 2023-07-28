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
      <WorkLayout id='dipd' link='https://www.instagram.com/dipducla/?hl=en' image="/images/DIPD-logo.jpg" title='DIPD (Diversity and Inclusion in Product and Data)' position='Vice President'>
        <Paragraph>
          DIPD!
        </Paragraph>
      </WorkLayout>
    </>
  )
}
