import  './leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';

function Leftbar() {
  return (
    <div className='leftbar'>
        <div className="leftbarWrapper">
            <ul className="leftbarList">
                <li className="leftbarListItem">
                <RssFeedIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Feed</div>
                </li>
                <li className="leftbarListItem">
                <RssFeedIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Feed</div>
                </li>
                <li className="leftbarListItem">
                <RssFeedIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Feed</div>
                </li>
                <li className="leftbarListItem">
                <RssFeedIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Feed</div>
                </li>
                <li className="leftbarListItem">
                <RssFeedIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Feed</div>
                </li>
                <li className="leftbarListItem">
                <RssFeedIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Feed</div>
                </li>
            </ul>
            <button className='sidebarButton'>Show more</button>
            <hr className='sidebarHr'/>
            <ul className="sidebarfriendsList">
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/persons/person3.png" alt="" className="sidebarFriendImg" />
                    <span className='sidebarFriendName'> Johntez</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Leftbar