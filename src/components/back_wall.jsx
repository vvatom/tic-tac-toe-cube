import './back_wall.css'

// 1  8  21
// 2  9  18
// 3  10 15

export default function BackWall(){
    return(
        <div className='backWallContainer'>

            <div className='backWallContainer__leftUpCorner'>
                <p>1</p>
            </div>
            <div className='backWallContainer__middleUp'>
                <p>8</p>
            </div>
            <div className='backWallContainer__rightUpCorner'>
                <p>21</p>
            </div>

            <div className='backWallContainer__leftCenterCorner'>
                <p>2</p>
            </div>
            <div className='backWallContainer__middleCenterUp'>
                <p>9</p>
            </div>
            <div className='backWallContainer__rightCenterorner'>
                <p>18</p>
            </div>

            <div className='backWallContainer__leftDownCorner'>
                <p>3</p>
            </div>
            <div className='backWallContainer__middleDown'>
                <p>10</p>
            </div>
            <div className='backWallContainer__rightDownCorner'>
                <p>15</p>
            </div>
        </div>
    )
}