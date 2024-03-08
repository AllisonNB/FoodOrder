import { useState, useEffect } from 'react';
import Item from './Item'


export default function Meals() {

    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost:3000/meals')
            const data = await response.json();
            setLoadedMeals(data);
        }

        fetchMeals();
    }, []);



    return <ul id='meals'>
        {loadedMeals.map(meal => {

            console.log(meal.image)

            return <Item key={meal.id}
                title={meal}
                description={meal}
                price={meal}
                image={meal}
            >
            </Item>
        })}

    </ul>

}