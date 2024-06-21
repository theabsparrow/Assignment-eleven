const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 9000;
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// middlewire
const corsOptions = {
  origin: ['http://localhost:5173',
    'https://gleaming-truffle-032adf.netlify.app',
    'https://eternels-89403.web.app',
    'https://eternels-89403.firebaseapp.com'
  ],
  credentials: true,
  optionSuccessStatus: 2000
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())

// verify token
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).send({ message: "unauthorize access" })
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log(err)
        return res.status(401).send({ message: "unauthorize access" })
      }
      req.user = decoded
      next()
    })
  }
}

// mongodb starts
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.psgygfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const cookieOption = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production" ? true : false,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict"
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    const dataBase = client.db('BlogDb');
    const blogCollection = dataBase.collection("blog");
    const wishlistCollection = dataBase.collection("wishlist");
    const commentCollection = dataBase.collection("comment");
    const clientCollection = dataBase.collection("client");

    // jwt function starts
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '100d'
      })

      res.cookie("token", token, cookieOption)
        .send({ success: true })
    })

    app.post("/logout", async (req, res) => {
      const user = req.body;
      res.clearCookie("token", { ...cookieOption, maxAge: 0 })
        .send({ success: true })
    })
    // jwt function ends

    // blog related function starts
    app.get("/blog", async (req, res) => {
      const filter = req.query.filter
      const search = req.query.search || ""

      let query = {
        blogTitle: { $regex: search, $options: 'i' }
      }

      if (filter) {
        query = { ...query, category: filter }
      }

      const cursor = blogCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const cursor = { _id: new ObjectId(id) };
      const result = await blogCollection.findOne(cursor);
      res.send(result);
    })

    app.post("/blog", async (req, res) => {
      const blogData = req.body;
      const result = await blogCollection.insertOne(blogData);
      res.send(result);
    })
    // blog related function ends


    // wishlist related function starts
    app.post("/wishlist", async (req, res) => {
      const wishlistData = req.body;
      const query = {
        visitorEmail: wishlistData.visitorEmail,
        wishlistID: wishlistData.wishlistID,
      }
      const alreadyApplied = await wishlistCollection.findOne(query)

      if (alreadyApplied) {
        return res.status(400).send("you have already added")
      }

      const result = await wishlistCollection.insertOne(wishlistData);
      res.send(result);
    })

    app.get("/wishlist", async (req, res) => {
      const cursor = wishlistCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get("/wishlist/:id", async (req, res) => {
      const id = req.params.id;
      const cursor = { _id: new ObjectId(id) };
      const result = await wishlistCollection.findOne(cursor);
      res.send(result);
    })

    app.get("/wishlists/:email", verifyToken, async (req, res) => {
      const tokenEmail = req.user.email;
      const email = req.params.email;

      if (tokenEmail !== email) {
        return res.status(403).send({ message: "forbidden access" })
      }
      const query = { visitorEmail: email };
      const result = await wishlistCollection.find(query).toArray();
      res.send(result)
    })

    app.delete("/wishlist/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await wishlistCollection.deleteOne(query);
      res.send(result)
    })
    // wishlist related function ends


    // comment related function starts
    app.post("/comment", async (req, res) => {
      const commentData = req.body;
      const result = await commentCollection.insertOne(commentData);
      res.send(result);
    })

    app.get("/comment", async (req, res) => {
      const cursor = commentCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get("/comment/:commentid", async (req, res) => {
      const commentid = req.params.commentid;
      const query = { commentId: commentid };
      const result = await commentCollection.find(query).toArray();
      res.send(result);
    })
    // comment related section ends


    // update section starts
    app.put("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true };
      const updatedInfo = req.body;
      const info = {
        $set: {
          blogTitle: updatedInfo.blogTitle,
          category: updatedInfo.category,
          image: updatedInfo.image,
          shortDescribtion: updatedInfo.shortDescribtion,
          longDescribtion: updatedInfo.longDescribtion,

        }
      }
      const result = await blogCollection.updateOne(filter, info, option)
      res.send(result)
    })
    // update section ends

    // client section starts
    app.get('/client', async (req, res) => {
      const cursor = clientCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })


    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send("server is running");
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})