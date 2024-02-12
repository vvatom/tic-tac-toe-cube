import './right_wall.css'

// 15 18 21
// 16 19 22
// 17 20 23

export default function RightWall(){
    return(
        <div className='rightWallContainer'>

            <div className='rightWallContainer__leftUpCorner'>
                <p>15</p>
            </div>
            <div className='rightWallContainer__middleUp'>
                <p>18</p>
            </div>
            <div className='rightWallContainer__rightUpCorner'>
                <p>21</p>
            </div>

            <div className='rightWallContainer__leftCenterCorner'>
                <p>16</p>
            </div>
            <div className='rightWallContainer__middleCenterUp'>
                <p>19</p>
            </div>
            <div className='rightWallContainer__rightCenterorner'>
                <p>22</p>
            </div>

            <div className='rightWallContainer__leftDownCorner'>
                <p>17</p>
            </div>
            <div className='rightWallContainer__middleDown'>
                <p>20</p>
            </div>
            <div className='rightWallContainer__rightDownCorner'>
                <p>23</p>
            </div>
        </div>
    )
}