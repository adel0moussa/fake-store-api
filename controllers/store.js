import Product from '../models/product.js';

const storeControllers ={
    home:(req,res)=>{
        const products = Product.getProducts();
        res.status(200).render('home',{products:products, isLoggedIn:req.session.isLoggedIn, email:req.session.email});
    },
    addProductForm:(req,res)=>{
        res.status(200).render('addProduct',{
            isLoggedIn: req.session.isLoggedIn,
            email: req.session.email
        });
    },
    addProduct:(req,res)=>{
        const {name,price,url}=req.body;
        if(!name||!price||!url){
            res.status(400).render('message',{
                title:'No valid Product',
                message:'Please fill all the data'
            });
        }else{
            const newProduct=new Product(name,price,url);
            newProduct.addProduct();
            res.status(302).redirect('/');
        }
    }
};

export default storeControllers;