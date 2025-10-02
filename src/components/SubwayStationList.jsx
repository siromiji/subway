import './SubwayStationList.css';
import Header from './Header.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { subwaystationIndex } from '../store/thunks/subwaystationThunk.js';


function SubwayStationList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const subwaystation = useSelector(state => state.subwaystation.list);

  useEffect(() => {
    dispatch(subwaystationIndex());
  }, [])

  return (
    <>
      <Header />
      <div className='subwaystationlist-title'><h1>지하철역 리스트</h1></div>
      <div className='subwaystationlist-searchbar'>
        <input type='text'></input>
      </div>
      {subwaystation && subwaystation.map(item => {
        return (
          <div className='subwaystationlist-item' onClick={() => { navigate('/subwaydetail1') }}>
            <div className='subwaystationlist-listCircle'>
              <img src="/mainnavsubway.png" alt="지하철사진" />

            </div>
            <p>{item.STATION_NM}</p>
          </div>
        )
      })

      }

    </>
  )
}

export default SubwayStationList;