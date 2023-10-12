import React , { useEffect } from 'react';
import axios from 'axios';

function FetchData(props){
    useEffect(()=>{
        axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then(res => {                                 
                //console.log(res.data[0])
                props.fetchcall(res.data)           
            })
            .catch(err=>{
                console.log(err)
            })   
    }, [])

    return (
        <div>
 
        </div>
    )
}
export default  FetchData