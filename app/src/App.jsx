import React, { useEffect, useState } from 'react'
import Split from 'react-split'
const App = () => {
    const[html,setHtml]=useState('')
    const[css,setCss]=useState('')
    const[js,setJs]=useState('')
    const[srcDoc,setSrcDoc]=useState('')

    useEffect(() =>{
        const timeout=setTimeout(() =>{
            setSrcDoc(`
                <html>
                  <body>${html}</body>
                  <style>${css}</style>
                  <script>${js}</script>
                </html>
                `);
        },250)
    },[html,css,js])


  return (
    <div className='App'>
        <Split style={{display:'flex', height:'100vh'}} sizes={[50,50]} direction='horizontal'>
          <div className='pane'>
            <Split style={{height:'100%'}} direction='vertical'>
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className='code-input'
                placeholder='Enter HTML Code...'
              ></textarea>
               <textarea
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className='code-input'
                placeholder='Enter CSS Code...'
              ></textarea>
               <textarea
                value={js}
                onChange={(e) => setJs(e.target.value)}
                className='code-input'
                placeholder='Enter JavaScript Code...'
              ></textarea>
            </Split>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox='allow-scripts allow-modals'
            width='100%'
            height="100%"
            className='output'
          ></iframe>
        </Split>
    </div>
  )
}

export default App
