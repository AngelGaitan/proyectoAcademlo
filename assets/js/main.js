import * as darkMode  from './helpers/darkMode.js';
import * as loader from './components/loader.js'
import * as navM from './components/navMenu.js'
import * as showCart from './components/cart.js'
import * as showNotify from './components/showNotify.js'
import products from './components/products.js';
import getProducts from './helpers/getProducts.js';


products(await getProducts())




