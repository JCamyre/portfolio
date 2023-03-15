import Paragraph from '../../components/paragraph'
import { useEffect } from 'react'
import WorkLayout from '../../components/layouts/workLayout'
import { UnorderedList, ListItem, List } from '@chakra-ui/react'

export default function Acm(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  }, [props])

  return (
    <>
      <WorkLayout id='acm' link='https://github.com/uclaacm' image="/images/acm-logo.png" title='ACM at UCLA' position='Dev Officer, Intern Manager'>
        <UnorderedList>
          <ListItem>Spearheaded development of informational Open-source website using Next.js, TypeScript</ListItem>
          <ListItem>Reduce number of API calls by 60% and improve performance by 37% using caching and revalidation</ListItem>
          <ListItem>Implement failsafe when API call limit is reached, increasing website uptime to 99.64%</ListItem>
        </UnorderedList>
      </WorkLayout>
    </>
  )
}
