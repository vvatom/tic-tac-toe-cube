import './left_wall.css'

// 1  2  3
// 24 25 4
// 7  6  5

export default function LeftWall(){
    return(
        <div className='leftWallContainer'>

            <div className='leftWallContainer__leftUpCorner'>
                <p>1</p>
            </div>
            <div className='leftWallContainer__middleUp'>
                <p>2</p>
            </div>
            <div className='leftWallContainer__rightUpCorner'>
                <p>3</p>
            </div>

            <div className='leftWallContainer__leftCenterCorner'>
                <p>24</p>
            </div>
            <div className='leftWallContainer__middleCenterUp'>
                <p>25</p>
            </div>
            <div className='leftWallContainer__rightCenterorner'>
                <p>4</p>
            </div>

            <div className='leftWallContainer__leftDownCorner'>
                <p>7</p>
            </div>
            <div className='leftWallContainer__middleDown'>
                <p>6</p>
            </div>
            <div className='leftWallContainer__rightDownCorner'>
                <p>5</p>
            </div>
        </div>
    )
}