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
      <WorkLayout id='devx' link='https://ucladevx.wixsite.com/devx/' image="/images/devx-logo.jpg" title='DevX at UCLA' position='Workshop Director, Technical Lead'>
        <Paragraph>
          DevX!
        </Paragraph>
      </WorkLayout>
    </>
  )
}
