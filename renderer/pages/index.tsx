import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

import {
  SSRProvider,
  Provider,
  defaultTheme,
  Button,
} from "@adobe/react-spectrum";

const IndexPage = () => {
  useEffect(() => {
    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', (_event, args) => {
      alert(args)
    })
  }, [])

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }

  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>
        <Button variant="cta" onPress={() => alert("Hey there!")}>
          Hello React Spectrum!
        </Button>
      </Provider>
    </SSRProvider>
  )
}

export default IndexPage
