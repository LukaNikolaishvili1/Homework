import"./card.css"

export default function Card(props){
    return (
     <div style={{background:props.color}}className="myCard">
        <h1>{props.brand}</h1>
        <p>{props.model}</p>
        <p>{props.price}</p>
        
     </div>
     
    )
}