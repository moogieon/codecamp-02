
const classmates =[
    "철수",
    "영희",
    "훈이"

]

export default function MpaPage(){


    return(

        <div>
            {classmates.map(data => <div>{data}어린이</div>)}
            
        </div>
        
    )
}