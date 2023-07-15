import { MoreVert } from '@mui/icons-material'
import './post.css'

function Post() {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/persons/person1.png" alt="" className="postProfileImg" />
                        <span className='postUsername'>Johntez</span>
                        <span className='postDate'>5 mins ago</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>

                </div>
            </div>

            <div className='postCenter'>
                <span className="spanText">Hey! Rada Gani</span>
                <img className='postImg' src="/assets/persons/person1.png" alt="" />
            </div>
            <div className='postBottom'>
                <div className="postBottomLeft">
                    <img className='likeIcon' src='/assets/persons/like.png' alt='' />
                    <img className='likeIcon' src='/assets/persons/heart.png' alt='' />
                    <span className="postLikeCounter">32 people liked</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    )
}

export default Post