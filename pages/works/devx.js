import Paragraph from '../../components/paragraph'
import { useEffect } from 'react'
import WorkLayout from '../../components/layouts/workLayout'
import { UnorderedList, ListItem } from '@chakra-ui/react'

export default function Acm(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  }, [props])

  return (
    <>
      <WorkLayout id='devx' link='https://ucladevx.wixsite.com/devx/' image="/images/devx-logo.jpg" title='DevX at UCLA' position='Workshop Director, Technical Lead'>
        <UnorderedList>
          <ListItem>Developed curriculum for both advanced and beginner workshops of 15 interns each</ListItem>
          <ListItem>Lead groups of 3-4 to apply knowledge from workshop by building a full-stack web application</ListItem>
          <ListItem>Organized and lead weekly meetings where I solved interns' blockers and delegated tasks for each project</ListItem>
          <ListItem>Choose from over 200 applicants through evaluating resumes and essays, as well as quick chats with candidates</ListItem>
        </UnorderedList>
      </WorkLayout>
    </>
  )
}
