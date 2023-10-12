import React from "react";
 
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

function UserDispBoard(props){

  function cmp(x, y){
    if (x.toLowerCase() < y.toLowerCase())  return -1; 
    if (x.toLowerCase() > y.toLowerCase())   return 1; 
    return 0; 
  } 
  const tickets  = props.apidata.tickets;
  const n = tickets.length;
  const users = props.apidata.users;
 
  let cardscol1 = [];
  let cardscol2 = [];
  let cardscol3 = [];
  let cardscol4 = [];
  let cardscol5 = [];
  
  for (let i=0; i< n ; i++){
    const card= {id: i+1,title: tickets[i].id, description:tickets[i].title, priority: tickets[i].priority};;
    switch(tickets[i].userId){
        case "usr-1" :  cardscol1.push(card);
                        break;
        case "usr-2" :  cardscol2.push(card);
                        break;  
        case "usr-3" :  cardscol3.push(card);
                        break; 
        case "usr-4" :  cardscol4.push(card);
                        break;  
        case "usr-5" :   cardscol5.push(card);
                        break;                                                                     
        default:        break;                
    }
 
         
  }
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
    cardscol3.sort((a, b)=>{ return cmp(a.description, b.description); });
    cardscol4.sort((a, b)=>{ return cmp(a.description, b.description); });
    cardscol5.sort((a, b)=>{ return cmp(a.description, b.description); });
  }
const col1 = {id: 12, title: users[0].name, cards:cardscol1};
const col2 = {id: 13, title: users[1].name, cards:cardscol2};
const col3 = {id: 14, title: users[2].name, cards:cardscol3};
const col4 = {id: 15, title: users[3].name, cards:cardscol4};
const col5 = {id: 16, title: users[4].name, cards:cardscol5};

const board = {
    columns: [ col1, col2, col3, col4, col5 ]  
  };

  return (
    <div> 
        <h4>Grouping by User  and Ordering by {props.sortopt}</h4>
        <Board>
                {board}
        </Board>
    </div>
  )
}
export default UserDispBoard 