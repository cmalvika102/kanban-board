function Display(props){
    function handler() {
        props.dispflag(true);
    }
    return (
        <div>

            <button style={{ color:"white" ,backgroundColor: 'grey' }} onClick={handler}>Display</button> 
           
        </div>
    );
}

export default Display