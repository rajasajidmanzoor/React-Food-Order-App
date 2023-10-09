import React from 'react'
import Card from '../../UI/Card'

import classes from './MealItem.module.css';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <>
            <Card>
                <div className={classes.meal}>
                    <div className={classes['meal-details']}> 
                        <h3> {props.name} </h3>
                        <div className={classes.description}> {props.description} </div>
                        <div className={ classes.price }> {price}</div>
                    </div>

                    <div>

                    </div>
                </div>
            </Card>
        </>
    )
}

export default MealItem