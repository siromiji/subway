import './SubwayStationList.css' ;
import Header from './Header.jsx';
import { useNavigate } from 'react-router-dom';


function SubwayStationList(){
    const navigate = useNavigate();
    return(
        <>
            <Header/>
            <div className='subwaystationlist-title'><h1>지하철역 리스트</h1></div>
            <div className='subwaystationlist-searchbar'>
                <input type='text'></input>
            </div>
            <div className='subwaystationlist-item' onClick={()=>{navigate('/subwaydetail1')}}>
                <div className='subwaystationlist-listCircle'>
                    <img src="/mainnavsubway.png" alt="지하철사진" />

                </div>
                <p>2호선 을지로 입구</p>
            </div>
            <div className='subwaystationlist-item' onClick={()=>{navigate('/subwaydetail1')}}>
                <div className='subwaystationlist-listCircle'>
                    <img src="/mainnavsubway.png" alt="지하철사진" />

                </div>
                <p>2호선 을지로 입구</p>
            </div>
            <div className='subwaystationlist-item' onClick={()=>{navigate('/subwaydetail1')}}>
                <div className='subwaystationlist-listCircle'>
                    <img src="/mainnavsubway.png" alt="지하철사진" />

                </div>
                <p>2호선 을지로 입구</p>
            </div>
            <div className='subwaystationlist-item'>
                <div className='subwaystationlist-listCircle'>
                    <img src="/mainnavsubway.png" alt="지하철사진" />

                </div>
                <p>2호선 을지로 입구</p>
            </div>
            <div className='subwaystationlist-item'>
                <div className='subwaystationlist-listCircle'>
                    <img src="/mainnavsubway.png" alt="지하철사진" />

                </div>
                <p>2호선 을지로 입구</p>
            </div>
            <div className='subwaystationlist-item'>
                <div className='subwaystationlist-listCircle'>
                    <img src="/mainnavsubway.png" alt="지하철사진" />

                </div>
                <p>2호선 을지로 입구</p>
            </div>
            <div className='subwaystationlist-item'>
                <div className='subwaystationlist-listCircle'>
                    <img src="/mainnavsubway.png" alt="지하철사진" />

                </div>
                <p>2호선 을지로 입구</p>
            </div>
        </>
    )
}

export default SubwayStationList;