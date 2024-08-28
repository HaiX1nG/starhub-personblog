import React, { useState, useEffect } from 'react'
import marked, { Marked } from 'marked'
import Editor from 'for-editor'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

const MyEditor = () => {
  const [mdContent, setMdContent] = useState('')

  const highlight = (code: string, lang: string) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  }

  const options = {
    // renderer: new marked.Renderer(),
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight: highlight
  }

  const handleEditorChange = (value: string) => {
    setMdContent(value)
  }

  return (
    <>
      <Editor value={mdContent} onChange={handleEditorChange} />
    </>
  )
}

export default MyEditor