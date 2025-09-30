import 'SubwayStationList.css' ;
import Header from './header';

function SubwayStationList(){
    return(
        <>
            <Header/>
            <div className='subwaystationlist-title'><h1>지하철역 리스트</h1></div>
            <div className='subwaystationlist-searchbar'><p>역이름을 검색하세요.</p></div>
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