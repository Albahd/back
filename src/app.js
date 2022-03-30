import {} from "dotenv/config"
import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import { validateAuth } from './auth/auth.middleware.js';
import dotenv from 'dotenv';
import scrapeIt from 'scrape-it';
import router from "./beer/beer.router.js"
import Evrouter from "./event/event.router.js"
import Favrouter from "./fav/fav.router.js"
import { validateUser } from './users/users.model.js';

dotenv.config()
const app = express();
const port = process.env.PORT || 4000;
// console.log(process.env.REACT_APP_EMAIL,process.env.REACT_APP_PASS)
console.log(process.env.DB_PW)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); 
app.use('/users', validateAuth, usersRouter);

// async function scrapeItExample() {
//     const scrapeResult = await scrapeIt('https://www.labuenacerveza.com/categoria/estilos-de-birra/page/6/', {
//         objeto: {
//             listItem: 'div.kft-product',
//             data: {
//                 title: 'h3.product-title',
//                 categories: 'div.product-categories',
//                 descripcion:'div.short-description',
//                 img: {
//                     selector: '.attachment-woocommerce_thumbnail ',
//                     attr: 'src'
//                 }
//             }
//         }
//     });
//     console.log(scrapeResult.data);
// }

// scrapeItExample()


app.use('/',router)
app.use('/Events',Evrouter)
app.use('/fav',Favrouter)


app.listen(port, () => console.log(`Levantemos el servidor... puerto ${port}... lo tenemos levantado hacia el señor`));