import './Tweet.css'
import { Link } from 'react-router-dom'
import {ChatCircle , ArrowsClockwise, Heart} from 'phosphor-react'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps){
  return (
    <Link to="/status" className="tweet">
        <img src="https://github.com/Gustavo-RSantos.png" alt="" />

        <div className='tweet-content'>
            <div className='tweet-content-header'>
              <strong>Gustavo Santos</strong>
              <span>@GustavoSantos</span>
            </div>
          <p>{props.content}</p>
          <div className='tweet-content-footer'>
            <button type='button'>
              <ChatCircle />
              20
            </button>

            <button type='button'>
              <ArrowsClockwise />
              53
            </button>

            <button type='button'>
              <Heart />
              34
            </button>
          </div>
        </div>
    </Link>
  )
}
