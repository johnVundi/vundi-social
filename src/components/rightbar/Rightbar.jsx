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
    </div>
    </div>
  )
}

export default Rightbar