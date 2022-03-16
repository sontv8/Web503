import Product from '../models/products'
// const products = [
//     {id:1,name:"Product 1"},
//     {id:2,name:"Product 2"}
// ]

export const listProduct = (request,response)=>{
    try{
        const product = Product.find().exec()
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}
export const listProductDetail = (request,response)=>{
    const product = products.find(item => item.id === +request.params.id)
    response.json(product)
}
export const createProduct = (request,response)=>{
    try{
        const product = Product.find().exec()
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong the tao moi"})
    }
    // products.push(request.body)
    // response.json(products)
}
export const deleteProduct = (request,response)=>{
    const product = products.filter(item => item.id != request.params.id)
    response.json(product);
}
export const updateProduct = (request,response)=>{
    response.json(products.map(item => item.id === +request.params.id? request.body:item))
}