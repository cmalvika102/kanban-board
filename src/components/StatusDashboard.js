
import React  from "react";
import Board  from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

function Displayboard(props){

  function cmp(x, y){
    if (x.toLowerCase() < y.toLowerCase())  return -1; 
    if (x.toLowerCase() > y.toLowerCase())   return 1; 
    return 0; 
  }
  const ticket = props.apidata.tickets;
  const n = ticket.length;
  let cardscol1 = [];
  let cardscol2 = [];
  let cardscol3 = [];
  let cardscol4 = [];
  let cardscol5 = []; 
 
  for (let i=0; i< n ; i++){
    const card= {id: i+1,title: ticket[i].id, description: ticket[i].title, priority: ticket[i].priority};
    switch(ticket[i].status){
        case "Backlog" :  cardscol1.push(card);
                        break;
        case "Todo" :  cardscol2.push(card);
                        break;  
        case "In progress" :  cardscol3.push(card);
                        break; 
        case "Done" :  cardscol4.push(card);
                        break;  
        case "Cancelled" :   cardscol5.push(card);
                        break;                                                                     
        default:        break;                
    }
  }

// console.log("Hello  ", props.sortopt);
 if( props.sortopt==="priority"){
  cardscol1.sort((a, b)=>{ return b.priority- a.priority});
  cardscol2.sort((a, b)=>{ return b.priority- a.priority});
  cardscol3.sort((a, b)=>{ return b.priority- a.priority});
  cardscol4.sort((a, b)=>{ return b.priority- a.priority});
  cardscol5.sort((a, b)=>{ return b.priority- a.priority});
} 
if( props.sortopt==="title"){
  cardscol1.sort((a, b)=>{ return cmp(a.description, b.description); });
  cardscol2.sort((a, b)=>{ return cmp(a.description, b.description); });
  cardscol3.sort((a, b)=>{ return cmp(a.description, b.description);});
  cardscol4.sort((a, b)=>{ return cmp(a.description, b.description); });
  cardscol5.sort((a, b)=>{ return cmp(a.description, b.description); });
} 
 
const col1 = {id: 12, title: "Backlog", cards: cardscol1};
const col2 = {id: 13, title: "Todo", cards: cardscol2};
const col3 = {id: 14, title: "In Progress", cards: cardscol3};
const col4 = {id: 15, title: "Done", cards: cardscol4};
const col5 = {id: 16, title: "Cancelled", cards:cardscol5};

const board = {
    columns: [col1, col2, col3, col4, col5 ]
  };

  return (
    <div> 
        <h4>Grouping by Status and Ordering by {props.sortopt} </h4>
 
        <Board>
                {board}
        </Board>
    </div>
  )
}
export default Displayboard 