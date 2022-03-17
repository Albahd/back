import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import { validateAuth } from './auth/auth.middleware.js';
import dotenv from 'dotenv';
import scrapeIt from 'scrape-it';

dotenv.config()
const app = express();
const port = 4000;
console.log(process.env.REACT_APP_EMAIL,process.env.REACT_APP_PASS)

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); 
app.use('/users', validateAuth, usersRouter);

async function scrapeItExample() {
    const scrapeResult = await scrapeIt('https://www.labuenacerveza.com/categoria/estilos-de-birra/', {
        objeto: {
            listItem: 'div.kft-product',
            data: {
                title: 'h3.product-title',
                categories: 'div.product-categories',
                descripcion:'div.short-description',
                img: {
                    selector: 'div.images',
                    attr: 'src'
                }
            }
        }
    });
    console.log(scrapeResult.data);
}

scrapeItExample()





app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));