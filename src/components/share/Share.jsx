import  './share.css'
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import PermMediaIcon from '@mui/icons-material/PermMedia';
function Share() {
  return (
    <div className='share'>
       <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="/assets/persons/Profile.jpeg" alt="" />
            <input placeholder="what's in your mind" className='shareInput' />
        </div>
        <hr className='shareHr'/>
       <div className="shareBottom">
         <div className="shareOptions">
            <div className="shareOption">
                <PermMediaIcon className='shareIcon'/>
                <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className="shareOption">
                <LabelIcon className='shareIcon'/>
                <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className="shareOption">
                <LocationOnIcon className='shareIcon'/>
                <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className="shareOption">
                <EmojiEmotionsIcon className='shareIcon'/>
                <span className='shareOptionText'>Photo or Video</span>
            </div>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Share