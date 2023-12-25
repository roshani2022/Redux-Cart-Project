import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
  {id:'p1',price:6,title:'My First Book',description:'The first book I ever wrote'},
  {id:'p2',price:12,title:'My Second Book',description:'The second book I ever wrote'},
  {id:'p3',price:18,title:'My Third Book',description:'The third book I ever wrote'},
  {id:'p4',price:24,title:'My Fourth Book',description:'The four book I ever wrote'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{Dummy_Products.map((product)=>(
           <ProductItem
           key={product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />
      ))}
       
      </ul>
    </section>
  );
};

export default Products;
