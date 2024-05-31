let big_box = document.querySelector('.hero')  // accessing div tag all 
let child_of_big_box = Array.from(big_box.children) //specifying children
let id_container = [];
let ids = []
let even_odd_ver  = 0
let verifyer =[]
let ply1_bx = document.querySelector('#py1o')
let ply2_bx = document.querySelector('#py1x')

function even_odd(){   //defining for condion one
   if(even_odd_ver%2===0){
    ++even_odd_ver
    return true
     }
     else{
        --even_odd_ver
        return false
     }
}   
function condions_two(x,e){        //defining for condion two
    let Status ;
    x.find(i=>{
    if(i===e){

        Status = false
    }
    else{
        Status = true
    }
  })
  return Status
}
function game_engine(w){                      // funtion for finding winner 
    let status;

    if(verifyer["one"]===w&&verifyer["two"]===w&&verifyer["three"]===w){
      status =  true
    }
    else if(verifyer["four"]===w&&verifyer["five"]===w&&verifyer["six"]===w){
        status =  true
    }
    else if(verifyer["seven"]===w&&verifyer["eight"]===w&&verifyer["Nine"]===w){
        status =  true
    }
    else if(verifyer["one"]===w&&verifyer["four"]===w&&verifyer["seven"]===w){
        status =  true
    }
    else if(verifyer["two"]===w&&verifyer["five"]===w&&verifyer["eight"]===w){
        status =  true
    }
    else if(verifyer["three"]===w&&verifyer["six"]===w&&verifyer["Nine"]===w){
        status =  true
    }
    else if(verifyer["one"]===w&&verifyer["five"]===w&&verifyer["Nine"]===w){
        status =  true
    }
    else if(verifyer["three"]===w&&verifyer["five"]===w&&verifyer["seven"]===w){
        status =  true
    }
    else{
     
        status = false
    }
    return status
  }

  let game_over = false;
big_box.addEventListener('click',(e)=>{             //funtion that get invocked when any box clicked
    
    
    if(e.target.nodeName==="SPAN"&&!game_over){
          let temp = document.querySelector("#"+e.target.id)
          let condition_one = even_odd()   //getint value of even and odd
          let condtions = condions_two(ids,e.target.id)            
          ids.push(e.target.id)

          console.log("running",ids.length,"id_cont",id_container.length)
                
          if((condition_one&&condtions)&&(ids.length!=10&&id_container.length!=9)){
            
              verifyer[e.target.id] = 'x'
              e.target.innerText = "x"
              id_container.push(e.target.id)
              res = game_engine('x')

              if(res){
                game_over  = true
                console.log("winner is x")
                ply2_bx.classList.add('py1x2')
              }
            }
        
          else if(condtions&&ids.length!=9&&id_container.length!=9) {
              e.target.innerText = "o"
              verifyer[e.target.id] = 'o'
              id_container.push(e.target.id)
              res = game_engine('o')
              if(res){
                game_over  = true
                console.log("winner is o")
                ply1_bx.classList.add('py1o2')
              }

            }
    
        }
        else{
            console.log("Game over")
        }
              
    })










// var Big_box = document.querySelector('.hero');
// var small_box = document.querySelectorAll('.box');
// var small_box_Array   = [] ; 
// small_box_Array = Array.from(small_box)
// var id_value = []; 
// var i = 0      //for chaning value from x to o and vice verse
// var text_container = [];
// var id_container = [];



// small_box_Array.forEach(element => {
   
    
     
     
//     element.addEventListener("click",e=>{
        
//        function in_array(){               
//         let status ;
//         id_value.find(i=>{
//             if(e.target.id!=i){
//                 status = true
                
//             }
//             else{
//                 status =  false
//             }
//         })
//         return status
//        }
//        let condition = in_array()                 //seting value for o or x
       
//        id_value.push(e.target.id)                            //id data pushed in array
//        //function for pushing data to array
//        function array_container(){
//         text_container.push(e.target.innerText)
//         id_container.push(e.target.id)
//        }
//     //    

//          // checking condition whever is it x or o
//         if(i%2===0 && condition || id_value === undefined){
//             e.target.innerText = "x"
//              i++
//              array_container()
//              let temp = finding_winner();
//              console.log("finding function",temp)
             
//             }
//         else if(i%2===1 && condition){
//             e.target.innerText = "O"
//             i--
//             array_container()
//             let temp = finding_winner();
//             console.log("finding function",temp)
//         }
       
        
        
//     })
    
    
     
// });





// //id_Array.push(Array.from(Big_box.children))
// //console.log(id_Array)
// // Big_box.addEventListener('click',e=>{
// //     var n = 0;
// //     if(e.target.nodeName ==="SPAN"&& n<9 ){
// //     id_Array.push(e.target.id)
// //     ++n
// //     }
// //     else{
// //         console.log("else")
// //         console.log('Arrya item',id_Array)
// //     }
    
// // })
// //console.log('Arrya item',id_Array)






// // var box_selector = document.querySelector('.hero');
// // var values = [0]
// // var conanter_of_oX = []
// // var o_x = 0 ;
// // var n  = 0;






// // box_selector.addEventListener('click',(e)=>{

// // function value(values) {
// //     var status = true
// //     values.forEach(element => {
// //         if (element==e.target.id) {
            
// //             status =  false
// //         }
// //         else{
// //             console.log("element",element)
// //             console.log('e.target.id',e.target.id)
// //             status = true
// //         }
// //     });
// //     return status
// // }
// // function winner(){
// // conanter_of_oX.push(e.target.innerText)
// //  if(values[0].innerText===conanter_of_oX[0]||values[1].innerText==conanter_of_oX[1]||values[2].innerText==conanter_of_oX[2]){
// //         //   console.log(conanter_of_oX)
        
// //  }    

// // }



// // var t  = value(values)
// // console.log(t)
// //   if(e.target.nodeName==='SPAN'&& t){
 
// //         if(o_x%2===0){
// //           e.target.innerText  = "X"
// //           id_value =  e.target.innerText
// //           values.push(id_value)  
// //           ++o_x   
// //           winner()       
// //         }

// //         else{
// //           e.target.innerText  = "0"
// //           id_value =  e.target.innerText
// //           values.push(id_value)
// //           --o_x
// //           winner()  
        
// //         }


// //         }  
  
// //         // console.log(conanter_of_oX)
// // })



        

