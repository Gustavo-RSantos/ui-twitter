import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from "../componentes/Header"
import { Separator } from "../componentes/Separator"
import { Tweet } from "../componentes/Tweet"



import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Testando interfacce',
    'Tudo funcionando'
  ])
  function createNewTweet(event: FormEvent){
      event.preventDefault()

      setTweets([newTweet, ...tweets])
      setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
  return (
    <main className='timeline'>
         <Header title='Home'/>

           <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Gustavo-RSantos.png" alt="Gustavo Santos" />
              <textarea
                id='tweet'
                placeholder='What is happening?'
                value={newTweet}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewTweet(event.target.value)
                }}
              />
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <Separator />

          {tweets.map(tweet => {
            //Key funciona como um ID do dado, para facilitar a visualização do react de determinado conteudo
            return <Tweet key={tweet} content={tweet} />
          })}
    </main>
  )
}
