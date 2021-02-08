const express = require ('express')
// from products.js file
const products = require ('./data/products')

const app = express()

app.get('/', (req, res) => {
    res.send('API is running.....')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})

// getting single product with by its id ...
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('Server running on port 5000'))