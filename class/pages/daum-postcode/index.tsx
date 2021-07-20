
import { useState } from 'react';
import {Modal,Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import DaumPostcode from 'react-daum-postcode';
import styled from '@emotion/styled';
const Inputaddress = styled.input`
    width: 400px;
    font-weight: 700;
   
`
const Inputzonecode = styled.input`
    width: 400px;
    font-weight: 700;
 
`

export default function DaumPostCodePage(){

    const [address,setAddress] = useState('')
    const [zonecode,setZoneCode] = useState('')
    function onComplete(data:any){
        console.log(data.zonecode, data.address)
        setAddress(data.address)
        setZoneCode(data.zonecode)
        setIsOpen(false)
    }
        
   
        const [isOpen, setIsOpen] = useState(false);
       
      
        function onClickOpen() {
        setIsOpen(true)
        } 
        
        function onClose() {

            setIsOpen(false)
            
           
        }
        // {isOpen&&}
    return(
    <>
        {isOpen&&
         <Modal
        onCancel={onClose}
        onOk={onClose}
        title="주소 검색"
        visible={true}
        
      
       
        
      >
        <DaumPostcode onComplete={onComplete} animation  autoClose/>
      </Modal>
}
      <Button  shape="circle" onClick={onClickOpen}  icon={<SearchOutlined />}></Button>
      <br/>

   
        <Inputaddress value={address} readOnly/>
        <br/>
        <Inputzonecode value={zonecode} readOnly/>
            
      
    </>
        ) 





    
}