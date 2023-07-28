import { UnorderedList, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph.js'
import Section from '../../components/section.js'
import { useEffect } from 'react'
import WorkLayout from '../../components/layouts/workLayout.js'

export default function Viasat(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  })

  const bulletPoints = ['Enhance phone authentication system, reduce the 25% of the 300 million customer support calls a year falsely requiring further verification, improving millions of users’ experience and saving over $2 million', 'Configure 20+ AWS services, including Lambda, CloudWatch, SQS, SNS, and IAM Roles, using Terraform', 'Call 10 different API’s, process up to 500 events a second from SQS using Python Lambda functions', 'Increase performance of Lambda’s by 38% using asynchronous programming and batching data to Kafka', 'Analyze and monitor logs using Splunk to increase debugging speed by 30%', 'Built AWS environment testing framework using AWS SAM, widely adopted by teams within the department', 'Constructed ADTT’s and unit-tests with Behave, enabling quicker testing, increasing development speed by 40%', 'Utilized Agile Scrum and Jira to manage workflow, lead Stand-Ups and Sprint Planning, increasing output by 34%', 'Developed CI/CD steps using Jenkins Pipeline, created automated QA tests, decreasing bug reports by 25%', 'Demoed completed project to 20+ executives in Card Fraud department and answered business-related questions']

  return (
    <>
      <WorkLayout id='capitalone' title='Capital One' image='/images/capital-one.png' link='https://www.capitalone.com/' position='Software Engineer Intern'>
          <UnorderedList>
            {bulletPoints.map((bulletPoint, key) => (
                <ListItem key={key}>{bulletPoint}</ListItem>
            ))}
          </UnorderedList>
      </WorkLayout>
    </>
  )
}
