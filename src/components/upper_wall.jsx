import './upper_wall.css'

// 3  10 15
// 4  11 16
// 5  12 17

export default function UpperWall(){
    return(
        <div className='upperWallContainer'>

            <div className='upperWallContainer__leftUpCorner'>
                <p>3</p>
            </div>
            <div className='upperWallContainer__middleUp'>
                <p>10</p>
            </div>
            <div className='upperWallContainer__rightUpCorner'>
                <p>15</p>
            </div>

            <div className='upperWallContainer__leftCenterCorner'>
                <p>4</p>
            </div>
            <div className='upperWallContainer__middleCenterUp'>
                <p>11</p>
            </div>
            <div className='upperWallContainer__rightCenterorner'>
                <p>16</p>
            </div>

            <div className='upperWallContainer__leftDownCorner'>
                <p>5</p>
            </div>
            <div className='upperWallContainer__middleDown'>
                <p>12</p>
            </div>
            <div className='upperWallContainer__rightDownCorner'>
                <p>17</p>
            </div>
        </div>
    )
}