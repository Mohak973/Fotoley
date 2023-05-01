import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Box,Avatar,ImageList} from "@mui/material"

function App() {

    interface Detail{
     img:string,
     desc:string,
     id:number
  }

  const [current,setcurrent]=React.useState(0)
  const [play,setplay]=React.useState(false)
  const [timerId, setTimerId] = React.useState(null);
  const details=[{img:"https://media.istockphoto.com/id/1369510216/photo/carefree-beautiful-latin-woman-relaxing-on-beach.jpg?s=1024x1024&w=is&k=20&c=MAZMFd7Xi490fU05LTjj7EyuGuvNefJUZ-OgLDLXSMM=",id:0,desc:"Smiling latin hispanic woman relaxing on beach with closed eyes at sunset. Beautiful mixed race woman enjoying wind fluttering hair. Charming and calm young woman breathing fresh air at summer beach with copy space."}
               ,{img:"https://media.istockphoto.com/id/1402004971/photo/healthy-heart-food-high-in-flavonoids-and-polyphenols.jpg?s=1024x1024&w=is&k=20&c=tNHyUcoK9Veqhs5mfNenLTyQ6PTjm-WR4SL_WZEAgQ4=",id:1,desc:"Healthy heart food high in flavonoids, polyphenols, antioxidants, anthocyanins, lycopene, vitamins, proteins, bioflavonoids, minerals, fibre. On rustic wood background."}
               

                ,{img:"https://media.istockphoto.com/id/1347086252/photo/common-chimpanzee.jpg?s=1024x1024&w=is&k=20&c=mZw8Xizct1h4nxzmEYwkEHmRloUcDuHLohOirvkJ9YI=",id:2,desc:"Portrait of a common chimpanzee (Pan troglodytes)"}
                ,{img:"https://media.istockphoto.com/id/1417433518/photo/pine-tree-forest-on-a-hill-desktop-background.jpg?s=1024x1024&w=is&k=20&c=0RIgbgqrlXqJw6Kw_zRJaQN2BtCfwSVfGL0uyHrIBk0=",id:3,desc:"Pine Tree Forest on a Hill - Desktop Background"}];

               const handlenext=()=>{
                 if(current===details.length-1){
                  setcurrent(0)
                 }else{
                  setcurrent(current+1)
                 }
               }
               const handlePrevious=()=>{
                  if(current===0){
                    setcurrent(details.length-1)
                  }
                  else{
                    setcurrent(current-1)
                  }
               }
               console.log(current)

              
              const handleshow=()=>{
                setplay((prev)=>!prev)
               
              }
              console.log(play)
             
             
           React.useEffect(()=>{
            let id:any
          
            if(play){
              clearTimeout(id)
              console.log(id)
              id = setTimeout(show,3000)
             
              console.log("show")
              
            }else{
              clearTimeout(id);
              setTimerId(null);
            }
            setTimerId(id)
            return () => {
              clearTimeout(id);
            };
           },[current,play])
              function show(){
                if(current===details.length-1){
                  setcurrent(0)
                }else if(play===true){
                  console.log("mohak")
                  setcurrent(current+1)
                }
                
              }
              const handleclick=(el:Detail)=>{
                setcurrent(el.id)
              }
             
              
  return (
    <div className="App">
      <Box display={{xs:'grid',lg:'flex',md:'flex'}} border='2px solid green'>
      <Box width={{lg:'50%'}}>
        <img src={details[current].img} alt='mainimg' width='100%' />
      </Box>
      <Box width={{lg:'50%'}}>
        {details[current].desc}
      </Box>
      </Box>
      <Box sx={{display:'flex'}}>
      <Button sx={{display:''}} onClick={handlePrevious}>previous</Button>
       <Box display={{lg:'flex',xs:'grid'}}>
        {details.map((el=>(
         <Box sx={{border:current===el.id?"4px solid red":"none",}} onClick={()=>handleclick(el)}>
            <img key={el.id} src={el.img} style={{width:'200px'}}  alt='imgs'></img>
         </Box>
         
         
        )))}
        </Box> 
      <Button onClick={handlenext}>Next</Button>
      <Button onClick={handleshow}>{play ? <img src='https://img.icons8.com/?size=2x&id=61012&format=png' alt='icon'/> : <img src='https://img.icons8.com/?size=2x&id=398&format=png' alt='icon' />}</Button>
      </Box>
     
      <br></br>

    
      
    </div>
  );
}

export default App;
