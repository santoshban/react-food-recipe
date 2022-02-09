import React from 'react'; 

const Recipe = ({ title, dishtype, calories, image, ingredients }) => {
    return(
        <div className='recipe__item'>
            <h2>{title}</h2>
            <p>Dish Type: {dishtype}</p>
            <h4>Ingredients</h4>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h4>Calories: {calories}</h4>
            <img src={image} alt={title} />
        </div>
    );
};

export default Recipe;