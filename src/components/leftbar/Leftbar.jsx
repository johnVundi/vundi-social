import  './leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
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
                <ChatIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Chat</div>
                </li>
                <li className="leftbarListItem">
                <PlayCircleIcon  className='sidebarIcon' />
                <div className="sidebarListItemText">Videos</div>
                </li>
                <li className="leftbarListItem">
                <GroupsIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Groups</div>
                </li>
                <li className="leftbarListItem">
                <BookmarkIcon  className='sidebarIcon' />
                <div className="sidebarListItemText">Bookmarks</div>
                </li>
                <li className="leftbarListItem">
                <HelpOutlineIcon className='sidebarIcon' />
                <div className="sidebarListItemText">Questions</div>
                </li>
                <li className="leftbarListItem">
                <WorkOutlineIcon  className='sidebarIcon' />
                <div className="sidebarListItemText">Jobs</div>
                </li>
                <li className="leftbarListItem">
                <EventIcon  className='sidebarIcon' />
                <div className="sidebarListItemText">Events</div>
                </li>
                <li className="leftbarListItem">
                <SchoolIcon  className='sidebarIcon' />
                <div className="sidebarListItemText">Courses</div>
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