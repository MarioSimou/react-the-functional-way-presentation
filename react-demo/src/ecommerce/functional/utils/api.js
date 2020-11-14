import db from '../db.json'

export const get = (url, addProducts) => setTimeout(() => {
    addProducts(db.products)
}, 200, url, addProducts)