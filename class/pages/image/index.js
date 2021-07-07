import styled from "@emotion/styled"
const MyImg = styled.img`
    width: 200px;
    height: 200px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    
    
    
`
const MyImg_2 = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 150px;
    left: 770px;
    cursor: pointer;
    
    

`
const MyImg_3 = styled.div`
    width: 200px;
    height: 200px;
    position: absolute;
    
   background-image: url("/test_images/profile_image.png");
   background-size: 100%;
    

`

const MyDiv = styled.div`
    width: 1000px;
    height: 1138px;
    /* background-color: aqua; */
    background-image: url('/test_images/green-and-brown-coconut-trees-under-clear-blue-sky-2486168.jpg');
    background-size: 100%;
    
   
   
    
`

const BackgroundTrans = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-end;
    padding-left: 100px;
    padding-right: 100px;
    
    

`
export default function ImagePage() {


    return (
        <>
            <MyDiv>
            <BackgroundTrans>
                 <MyImg_3>
                <MyImg src="/test_images/profile_image.png" />
                <MyImg_2 src="/test_images/img-60-profile-empty@3x.png" />
                </MyImg_3>
            </BackgroundTrans>
            </MyDiv>
            
            
        </>

    )

}