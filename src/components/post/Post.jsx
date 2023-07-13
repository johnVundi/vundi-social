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

            <div className='postCenter'> </div>
            <div className='postBottom'> </div>
        </div>
    )
}

export default Post