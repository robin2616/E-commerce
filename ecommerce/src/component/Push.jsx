function Push(){
    const x="abc"
    return(<>
         <button onClick={async()=>{
             
             const response = await fetch('https://e-commerce-1-0yf6.onrender.com/push',{
                method: 'POST',
                body: JSON.stringify(detail),
                headers: {'Content-Type': 'application/json'}
            })




             
         }}>dsgyugsdyug</button>  
    </>)
}


export default Push;