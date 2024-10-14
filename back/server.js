const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const products = [
    {
      id: 1,
      name: 'Nintendo Switch',
      price: 285.83,
      image: 'https://m.media-amazon.com/images/I/71wpE+ZIehL._SL1500_.jpg',
      description: 'Descrição do Produto 1'
    }, 
    {
      id: 2,
      name: 'Oculus Quest 2',
      price: 396.00,
      image: 'https://m.media-amazon.com/images/I/51yEisLcPxL._SL1500_.jpg',
      description: 'Descrição do Produto 2'
    },
    {
      id: 3,
      name: 'Xbox Series X',
      price: 479.00,
      image: 'https://m.media-amazon.com/images/I/51ojzJk77qL._SL1500_.jpg',
      description: 'Descrição do Produto 3'
    },
    {
        id: 4,
        name: 'Gaming Laptop',
        price: 1699.99,
        image: 'https://m.media-amazon.com/images/I/71wV8KtCCZL._AC_SL1500_.jpg',
        description: 'Descrição do Produto 4'
    },
    {
        id: 5,
        name: 'Controller Machenike G320',
        price: 29.99,
        image: 'https://m.media-amazon.com/images/I/61b3JwDp+qL._SL1500_.jpg',
        description: 'Descrição do Produto 5'
      }, 
      {
        id: 6,
        name: 'Playstation Sony 4',
        price: 244.99,
        image: 'https://m.media-amazon.com/images/I/51tbWVPtckL._SL1500_.jpg',
        description: 'Descrição do Produto 6'
      },
      {
        id: 7,
        name: 'Super Smash Bros',
        price: 53.18,
        image: 'https://m.media-amazon.com/images/I/81gTTc2IpCL._SL1500_.jpg',
        description: 'Descrição do Produto 7'
      },
      {
          id: 8,
          name: 'Headset SteelSeries Arctis',
          price: 139.99,
          image: 'https://m.media-amazon.com/images/I/81CsKKSAFoL._AC_SL1500_.jpg',
          description: 'Descrição do Produto 8'
      },
      {
        id: 9,
        name: 'ARZOPA 75% Mechanical Gaming Keyboard Wired',
        price: 79.99,
        image: 'https://m.media-amazon.com/images/I/61pRioARU1L._AC_SL1500_.jpg',
        description: 'Descrição do Produto 9'
      }, 
      {
        id: 10,
        name: 'Logitech G502 X Wired Gaming Mouse',
        price: 66.49,
        image: 'https://m.media-amazon.com/images/I/61fjq9eujBL._AC_SL1500_.jpg',
        description: 'Descrição do Produto 10'
      },
      {
        id: 11,
        name: 'Funny Developer By Day T-Shirt',
        price: 19.97,
        image: 'https://m.media-amazon.com/images/I/B1HVVUyLAhL._CLa%7C2140%2C2000%7C812%2BiZDXqbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png',
        description: 'Descrição do Produto 11'
      },
      {
          id: 12,
          name: 'Mug Funny Gift Computer Programmer',
          price: 13.97,
          image: 'https://m.media-amazon.com/images/I/71HfC5uoJvL._AC_SL1500_.jpg',
          description: 'Descrição do Produto 12'
      }
  ]


app.get('/api/products', (req, res) => {
    res.json(products);
})

app.post('/api/product/details', (req, res) => {
    const { id } = req.body;
    const product = products.find(item => item.id === id)
    if(product) {
        res.json(product)
    } else {
        res.status(404).json({
            message: 'Produto não encontado'   
        })
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})