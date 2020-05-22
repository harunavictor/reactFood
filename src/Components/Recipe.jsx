import React from 'react'
import style from './Recipe.module.css'

export default function Recipe({title,calories,image,ingredients}) {
    return (
        <div className ={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories: {calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}
