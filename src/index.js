import express from 'express';
import Cheerio  from 'cheerio';
import axios from 'axios';


// const axios = require('axios');
// const cheerio = require('cheerio');

async function cheerioExample() {
    const pageContent = await axios.get('https://www.labuenacerveza.com/categoria/estilos-de-birra/');
    const $ = cheerio.load(pageContent.data);
    const databeer = $('div.-kft-product').map((_, el) => {
        el = $(el);
        const title = el.find('div.item-information.h3.product-title product-name').text();
        const price = el.find('div.item-information.span-price').text();
        const link = el.find('a.deck-link').attr('href');
        return { title, price, link };
    }).get();
    console.log(databeer);
}