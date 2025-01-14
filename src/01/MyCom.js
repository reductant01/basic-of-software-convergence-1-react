import clock from './clock.png' ;
import './MyCom.css' ;
import { useState, useEffect } from 'react';


function MyCom() {
  // 상태변수 선언
  const[tm, setTm] = useState(new Date());

  const mycomDiv = {
    width : '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }

  // 컴포넌트 생성시 한번 실행
  useEffect(()=>{
    const timer = setInterval(()=>{
      setTm(new Date())
    }, 1000); // 1000ms마다 실행

    return(()=>{
      clearInterval(timer); // 컴포넌트가 없어질때 timer 변수 초기화
    });
  }, []);

  return (
    <div style={mycomDiv}>
      <p className='mycomP'>
        <img src={clock} alt='시계' style={{'width':'400px'}} />
      </p>
      <p className='text-white text-lg font-bold bg-blue-800
                    p-5'>
        현재 시간 : {tm.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default MyCom ;