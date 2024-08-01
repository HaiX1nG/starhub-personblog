import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const markdownContent = `
  # Hello, World!

  This is a **Markdown** content.

  - Item 1
  - Item 2
  - Item 3
`;

const MyEditor = () => {


  return (
    <>
      <ReactMarkdown children={markdownContent} />
    </>
  )
}

export default MyEditor