import  './rightbar.css'

function Rightbar() {
  return (
    <div className='rightbar'>
    <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img src="/assets/persons/person3.png" alt="" className="birthdayImg" />
        <span className="birthdayText">
          {""}
          <b>Otis</b> and <b>3 others</b> have a birthday today
        </span>
      </div>
      <img src="/assets/persons/ad.avif" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle"> Online Friends</h4>
      <ul className="rightbarFriendsList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/persons/person1.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Wafula wa Ingo</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/persons/person1.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Wafula wa Ingo</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/persons/person1.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Wafula wa Ingo</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/persons/person1.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Wafula wa Ingo</span>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Rightbar