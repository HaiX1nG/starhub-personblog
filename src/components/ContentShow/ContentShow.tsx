import React from 'react'
import ReactMarkdown from 'react-markdown';

interface IProps {
  content: string
}

const ContentShow = (props: IProps) => {

  return (
      <ReactMarkdown children={props.content} />
  )
}

export default ContentShow