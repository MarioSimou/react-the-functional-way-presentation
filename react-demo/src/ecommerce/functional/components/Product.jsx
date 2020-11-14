import React from 'react'

const styles = {
    div: {
        padding: '1rem',
        border: '1px solid red',
        marginRight: '1rem'
    }
}

const Product = (props) => {
    return (
        <div style={styles.div}>
            <div>Name: {props.name}</div>
            <div>Price: {props.price}</div>
            <div>Currency: {props.currency}</div>
        </div>
    )
}

export default Product