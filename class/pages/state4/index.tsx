// import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';


export default function StatePage4(){
    const[state,setState]= useState(0);
    function onClickState(){
        // prev 임시저장공간에 있는 값을 가져온다.
        
        setState(prev => prev + 1);
        setState(prev => prev  + 2);
        setState(prev => prev  + 3);
        setState(prev => prev  + 4);
    }

    return(

    <>
    <div>{state}</div>
    <Button onClick={onClickState}  size='large'type="primary" danger>
    테스트하기 </Button>
    </>
    )
}