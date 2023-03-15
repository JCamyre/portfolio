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
      <WorkLayout id='acm' link='https://opensource.uclaacm.com' image="/images/acm-logo.png" title='ACM at UCLA' position='Dev Officer'>
        <Paragraph>
          ACM!
        </Paragraph>
      </WorkLayout>
    </>
  )
}
