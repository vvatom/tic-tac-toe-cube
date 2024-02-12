import './front_wall.css'

// 5  12  17
// 6  13  20
// 7  14  23

export default function FrontWall(){
    return(
        <div className='frontWallContainer'>

            <div className='frontWallContainer__leftUpCorner'>
                <p>5</p>
            </div>
            <div className='frontWallContainer__middleUp'>
                <p>12</p>
            </div>
            <div className='frontWallContainer__rightUpCorner'>
                <p>17</p>
            </div>

            <div className='frontWallContainer__leftCenterCorner'>
                <p>6</p>
            </div>
            <div className='frontWallContainer__middleCenterUp'>
                <p>13</p>
            </div>
            <div className='frontWallContainer__rightCenterorner'>
                <p>20</p>
            </div>

            <div className='frontWallContainer__leftDownCorner'>
                <p>7</p>
            </div>
            <div className='frontWallContainer__middleDown'>
                <p>14</p>
            </div>
            <div className='frontWallContainer__rightDownCorner'>
                <p>23</p>
            </div>
        </div>
    )
}