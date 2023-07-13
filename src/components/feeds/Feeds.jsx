import Post from '../post/Post'
import Share from '../share/Share'
import './feeds.css'

function Feeds() {
    return (
        <div className='feed'>
            <div className="feedsWrapper">
                <Share />
                <Post />
            </div>
        </div>
    )
}

export default Feeds