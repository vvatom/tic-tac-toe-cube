import './bottom_wall.css'

// 7  14 23
// 24 0  22
// 1  8  21

export default function BottomWall(props){

    const {mainTab, setMainTab} = props

    return(
        <div className='bottomWallContainer'>

            <div 
            className='bottomWallContainer__leftUpCorner'
            onClick={()=>{setMainTab(
                mainTab.map((x)=> {})
            )}}
            >
                <p>{mainTab[6].sign}</p>
            </div>
            <div className='bottomWallContainer__middleUp'>
                <p>14</p>
            </div>
            <div className='bottomWallContainer__rightUpCorner'>
                <p>23</p>
            </div>

            <div className='bottomWallContainer__leftCenterCorner'>
                <p>24</p>
            </div>
            <div className='bottomWallContainer__middleCenterUp'>
                <p>0</p>
            </div>
            <div className='bottomWallContainer__rightCenterorner'>
                <p>22</p>
            </div>

            <div className='bottomWallContainer__leftDownCorner'>
                <p>1</p>
            </div>
            <div className='bottomWallContainer__middleDown'>
                <p>8</p>
            </div>
            <div className='bottomWallContainer__rightDownCorner'>
                <p>21</p>
            </div>
        </div>
    )
}