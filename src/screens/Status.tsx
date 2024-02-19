import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../componentes/Header"
import { Separator } from "../componentes/Separator"
import { Tweet } from "../componentes/Tweet"

import './Status.css'
import { PaperPlaneTilt } from "phosphor-react"

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    ' É incrível como a tecnologia evoluiu tão rapidamente, não é mesmo? Estou ansioso para ver o que o futuro nos reserva! 🌟 #Tecnologia #Inovação',
    ' Isso é tão empolgante! 🙌 Já experimentei a realidade virtual em 4K, mal posso esperar para dar o salto para o 8K. Deve ser alucinante! 😃 #RealidadeVirtual #Tecnologia',
    ' É incrível como a tecnologia pode nos transportar para outros mundos. 🌍💫 Estou ansioso para ver como a RV vai revolucionar a forma como experimentamos a arte e os jogos! 🎮🎨 #RealidadeVirtual #Inovação'
  ])
  function createNewAnswer(event: FormEvent){
      event.preventDefault()

      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return(
      <main className='status'>
           <Header title='Tweet'/>

           <Tweet content="🚀 A tecnologia nunca para de nos surpreender! Hoje, fiquei maravilhado ao experimentar a realidade virtual em 8K. Parece que estou em outro mundo! 🌌 O futuro é agora! 💡#Tecnologia #RealidadeVirtual #FuturoTech"/>
          <Separator />

             <form onSubmit={createNewAnswer}className='answer-tweet-form'>
              <label htmlFor="tweet" id="testelabel">
                <img src="https://github.com/Gustavo-RSantos.png" alt="Gustavo Santos" />
                <textarea
                  id='tweet'
                  placeholder='Tweet your answer'
                  value={newAnswer}
                  onKeyDown={handleHotKeySubmit}
                  onChange={(event) => {
                    setNewAnswer(event.target.value)
                  }}
                  />
              </label>

              <button type='submit'>
                <PaperPlaneTilt />
                <span>Tweet</span>
              </button>
            </form>

          {answers.map(answer => {
            //Key funciona como um ID do dado, para facilitar a visualização do react de determinado conteudo
            return <Tweet key={answer} content={answer} />
          })}
      </main>
  )
}
