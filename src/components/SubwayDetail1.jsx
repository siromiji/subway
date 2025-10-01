import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import './SubwayDetail1.css';

function SubwayDetail1(){
    const navigate = useNavigate();
    return(
        <>  
        <Header/>
        <div className='subwaydetail-nav'>
            <div className='subwaydetail-item'>
                <div className='subwaydetail-contentwrap'>
                    <div className='subwaydetail-imgBbox'>
                    <img src="/realtime.png" alt="실시간이미지" />
                    </div>
                    <p>실시간정보</p>
                </div>
                <div className='subwaydetail-whiteline check'></div>
            </div>
             <div className='subwaydetail-item'onClick={()=>{navigate('/timeline')}}>
                <div className='subwaydetail-contentwrap'>
                    <div className='subwaydetail-imgBbox'>
                    <img src="/timelist.png" alt="실시간이미지" />
                    </div>
                    <p>공식시간표</p>
                </div>
                <div className='subwaydetail-whiteline'></div>
            </div>
             <div className='subwaydetail-item' onClick={()=>{navigate('/startend')}}>
                <div className='subwaydetail-contentwrap'>
                    <div className='subwaydetail-imgBbox'>
                    <img src="/startstage.png" alt="실시간이미지" />
                    </div>
                    <p>첫차,막차</p>
                </div>
                <div className='subwaydetail-whiteline'></div>
            </div>
        {/* 네비끝 */}

        </div>
        <div className='subwaydetail-titlebox'>
            <div className='subwaydetail-colorname'></div>
                <h1>을지로4가</h1>
            <div className='subwaydetail-colorname'></div>
            
        </div>
        {/* 타이틀 끝 */}
        <div className='subwaydetail-numbersbox'>
                <div className='subwaydetail-item'>
                    <img src="/circle2.png" alt="원이미지" />
                    <div className="subwaydetail-underline greencheck"></div>
                </div>
                <div className='subwaydetail-item'>
                    <img src="/circle5.png" alt="원이미지" onClick={()=>{navigate('/subwaydetail2')}}/>
                    <div className="subwaydetail-underline"></div>
                </div>
                
        </div>
        {/* 원 이미지 끝 리스트 시작 */}
        <div className='subwaydetail-listitem'onClick={()=>{navigate('/timeline')}}>
            <div className='subwrayhdetail-circleimgbox'>
                <img src="/circle2.png" alt="원이미지" />
            </div>
            
            <div className='subwaydetail-textwrap'>
                <h2>을지로3가방향</h2>
                <p>{`신당도착(성수행)`}</p>
                <p><span>6분 30초 후</span>{`도착 (4개역)(성수행)`}</p>
                <p><span>4분 30초 후</span>{`도착 (4개역)(성수행)`}</p>
            </div>
            <div className='subwaydetail-array'>
                <img src="/array.png" alt="화살표" />
            </div>
        </div>
        <div className='subwaydetail-listitem' onClick={()=>{navigate('/timeline')}}>
            <div className='subwrayhdetail-circleimgbox'>
                <img src="/circle2.png" alt="원이미지" />
            </div>
            
            <div className='subwaydetail-textwrap'>
                <h2>을지로3가방향</h2>
                <p>{`신당도착(성수행)`}</p>
                <p><span>6분 30초 후</span>{`도착 (4개역)(성수행)`}</p>
            </div>
            <div className='subwaydetail-array'>
                <img src="/array.png" alt="화살표" />
            </div>
        </div>
        
       
        </>
    )
}

export default SubwayDetail1;