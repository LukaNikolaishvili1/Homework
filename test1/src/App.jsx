
import './App.css'
import Card from './components/card'

function App() {
    let products = [
        {
            id: 1,
            brand: "Samsung",
            model: "galaxy S24 Ultra",
            color: "red",
            price: "3400 GEL"
        },
        {
            id: 2,
            brand: "Nokia",
            model: "3110",
            color: "green",
            Price: "50 GEL"
        },
        {
            id: 3,
            brand: "Galaxy watch",
            model: "4",
            color: "green",
            price: "400 GEL"
        },
        {
            id: 4,
            brand: "Samsung",
            model: "galaxy 22 ultra",
            color: "red",
            price: "2300 GEL"
        },
        {
            id: 5,
            brand: "Iphone",
            model: "13 pro",
            color: "red",
            price: "2400 GEL"
        },
        {
            id: 6,
            brand: "Xiaomi",
            model: "redmi note12s",
            color: "green",
            price: "900 GEL"
        },
        {
            id: 7,
            brand: "apple watch",
            model: "series 3",
            color: "red",
            price: "1300 GEL"
        },
        {
            id: 8,
            brand: "Xiaomi",
            model: "Redmi note 8",
            color: "green",
            price: "650 GEL"
        },
        {
            id: 9,
            brand: "Google",
            model: "pixel 9 ",
            color: "red",
            price: "2500 GEL"
        },
        
        
        
    ]

    return(
    <>
    {products.map( item => (
        <Card key={item.id}
        brand={item.brand}
        model={item.model}
        color={item.color}
        price={item.price}
        />
    ) )}
    </>
    )
  
}

export default App
