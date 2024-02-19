import twitterLogo from "../assets/logo.twitter.svg"
import { Link } from "react-router-dom";
import { House , Bell ,Hash, Envelope, BookmarkSimple, FileText , User, DotsThreeCircle, Pencil} from 'phosphor-react'
import './Sidebar.css'

export function Sidebar() {
  return (
    <aside className='sidebar'>
          <img className='logo' src={twitterLogo} alt="" />

          <nav className='main-navigation'>
                <Link className = "" to="">
                  <House />
                 <span>Home</span>
                </Link>
                <a href="">
                  <Hash />
                <span>Explore </span>
                </a>
                <a href="">
                  <Bell />
                  <span>Notifications</span>
                </a>
                <a href="">
                  <Envelope />
                  <span>Messages</span>
                </a>
                <a href="">
                  <BookmarkSimple />
                  <span>Bookmarks</span>
                </a>
                <a href="">
                  <FileText />
                  <span>Lists</span>
                </a>
                <a href="">
                  <User/>
                  <span>Profile</span>
                </a>
                <a href="">
                  <DotsThreeCircle />
                  <span>More</span>
                </a>
          </nav>

          <button className='buttonTweet' type='button'>
            <Pencil />
            <span>Tweet</span>
          </button>
        </aside>
  );
}
