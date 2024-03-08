


// export default function Item({ title, description, price, image }) {



//     return <li className="meal-item">
//         <article>
//             <img src={`http://localhost:3000/${image}`} alt={title} />
//             <div>
//                 <h3>{title}</h3>
//                 <p className="meal-item-description">{description}</p>
//                 <p className="meal-item-price" >{price}</p>
//             </div>
//             <p className="meal-item-action">
//                 <button >Add to Cart</button>
//             </p>
//         </article>
//     </li>
// }



export default function MealItem({ meal }) {
    console.log(meal.image)

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{meal.price}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
    );
}