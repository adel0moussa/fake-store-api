import{ v4 as newId}from'uuid';

const products=[
    {
    id:newId(),
    name:'Laptop',
    price:'700',
    url:'https://www.maascomputers.nl/12125-large_default/hp-elitebook-840-g6-14-core-i7-8565u-8-gb-ram-256-gb-ssd-us-international.jpg'
},
{
    id:newId(),
    name:'Mouse',
    price:'10',
    url:'https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-charcoal-gallery-01.png?v=1'
},
{
    id:newId(),
    name:'Screen',
    price:'150',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjL3b_JAyo3TwZhDXETZoLGR3ohWK983Qxig&usqp=CAU'
},
];

class Product{
    constructor(name,price,url){
        this.id=newId();
        this.name=name;
        this.price=price;
        this.url=url;
    }


    static getProducts =()=>{
        return products;
    };

    addProduct=()=>{
        products.push(this);
    };
}

export default Product;
