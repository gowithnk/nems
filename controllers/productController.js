const db = require("../models");

const Product = db.Product;
const Review = db.Review;

// Create Products
const addProduct = async (req, res) => {
  try {
    let info ={
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    }
    const product = await Product.create(info);
    res.status(200).json(product);
    console.log(product);

  } catch (err) {
    res.status(400).json(err);
  }
}

// Get all products

const getAllProducts = async (req, res) => {
  try {
    let products = await Product.findAll({})
    res.status(200).send(products);
  } catch (err) {
    res.status(400).json(err);
  }
}

// get single product
const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  try {
    let product = await Product.findOne({where: {id: id}});
    res.status(200).send(product);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

// update Product

const updateProduct = async (req, res) => {
  let id = req.params.id;
  try {
    let product = await Product.update(req.body, {where: {id: id}});
    res.status(200).send(product);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

// delete product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  try {
    await Product.destroy({where: {id: id}});
    res.status(200).send('product deleted');
  }
  catch (err) {
    res.status(400).json(err);
  }
}

// get published product
const getPublishedProduct = async (req, res) => {
  try {
    let products = await Product.findAll({where: {published: true}});
    res.status(200).send(products);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct
}

