import React from 'react';
import {useState, useEffect} from 'react'
import './square.css';


class Player{
      constructor(id,value){
          this.id = id;
          this.value = value;

      }
    }
  class box {
    constructor(id, isactive, value)
    {
      this.id = id;
      this.isactive = isactive;
      this.value = value
    }
  }

const Square = () => {
  

    const p1 = new Player(1,"X");
    const p2 = new Player(2, "O");

    const [b1] = useState(new box([0,0],true, ""));
    const [b2] = useState(new box([0,1],true, "")); 
    const [b3] = useState(new box([0,2],true, ""));
    const [b4] = useState(new box([1,0],true, ""));
    const [b5] = useState(new box([1,1],true, ""));
    const [b6] = useState(new box([1,2],true, ""));
    const [b7] = useState(new box([2,0],true, ""));
    const [b8] = useState(new box([2,1],true, ""));
    const [b9] = useState(new box([2,2],true, ""));


    const [currentPlayer, setCurrentPlayer] = useState(p1);
    const [move, setMove] = useState({
      "O":[],
      "X" : []
    });

    const winningMove = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
    ]

    const [winner, setWinner ] = useState( );
 
  

  


    const onGridClick = (box, player,id) =>{
  
     if(box.isactive)
      {
        
        box.value = currentPlayer.value;
         box.isactive = false;
         addMove(player,id);
         changePlayer();
         
         
        
    
      }
      
    };


const changePlayer = () =>{
      setCurrentPlayer((prevPlayer) => prevPlayer.value === "X" ? p2 : p1);
        
}

const addMove = (player,id) =>{
    
  setMove((prevMove) => ({
    ...prevMove, 
    [player] : [...prevMove[player], id],
  }));
 
  checkWinner(player);
}
// useEffect(()=>{
//   if (move.X.length > 0) {  // Ensure we have at least one move in X
//     checkWinner("X");
//   }
//   if (move.O.length > 0) {  // Ensure we have at least one move in X
//     checkWinner("O");
//   }
// }, [move.X, move.O]); 

const checkWinner = (player) => {
    
        const fixedMove = move[player];
      // console.log(move.X);
        setWinner(winningMove.some((winningArray) => {
         // console.log(subArr);
           return  winningArray.every(([r, c]) => 
            fixedMove.some(([mr, mc]) => mr === r && mc === c));
            
              
             // return result;
             
            
   
        })  
      )
      
       
 
 
}
const arraysEqual = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
}


  
    return(
        <>
          <div><h1>Current player {currentPlayer.value}</h1>
          <p>{JSON.stringify(move.X)}</p>
           <p>{JSON.stringify(move.O)}</p></div>

            <div><h2>{winner ? `${currentPlayer.value} wins!` : `Current player: ${currentPlayer.value}`}</h2>
          </div>
         <table>
                <tbody>
                    <tr>
                          <td>
                           <button onClick = {()=>onGridClick(b1, currentPlayer.value,b1.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b1.isactive? " ": b1.value}</p>
                                    
                                    </div>
                                </div>
                                
                              </button>
                          </td>

                           <td>
                           <button onClick = {() => onGridClick(b2,currentPlayer.value,b2.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b2.isactive? " ": b2.value}</p>
                                    </div>
                                </div>
                                
                              </button>
                          </td>

                           <td>
                           <button onClick = {()=>onGridClick(b3,currentPlayer.value,b3.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b3.isactive? " ": b3.value}</p>
                                    </div>
                                </div>
                                
                              </button>
                          </td>
                           
                    </tr>   

                    <tr>
                          <td>
                           <button onClick = {()=>onGridClick(b4,currentPlayer.value,b4.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b4.isactive? " ": b4.value}</p>
                                    </div>
                                </div>
                                
                              </button>
                          </td>

                           <td>
                           <button onClick = {()=>onGridClick(b5,currentPlayer.value,b5.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b5.isactive? " ": b5.value}</p>
                                    </div>
                                </div>
                                
                              </button>
                          </td>
                          
                           <td>
                           <button onClick = {()=>onGridClick(b6,currentPlayer.value,b6.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b6.isactive? " ": b6.value}</p>
                                    </div>
                                </div>
                                
                              </button>
                          </td>
                           
                    </tr>
                    
                     <tr>
                          <td>
                           <button onClick = {()=>onGridClick(b7,currentPlayer.value,b7.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b7.isactive? " ": b7.value}</p>
                                    </div>
                                </div>
                                
                              </button>
                          </td>

                           <td>
                           <button onClick = {()=>onGridClick(b8,currentPlayer.value,b8.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b8.isactive? " ": b8.value}</p>
                                    </div>
                                </div>
                                
                              </button>
                          </td>
                          
                           <td>
                           <button onClick = {()=>onGridClick(b9,currentPlayer.value,b9.id)}>
                                <div id="squareBox">
                                    <div id= "innerBox" >
                                 
                                    <p>{b9.isactive? " ": b9.value}</p>
                                    </div>
                                </div>
                                
                              </button>
                          </td>
                           
                    </tr>          
                </tbody>
         </table>
          
      
          </>
    )
  
}

export default Square