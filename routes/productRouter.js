const productController = require("../controllers/productController");

const router = require("express").Router();

router.post("/createProduct", productController.createProduct);
router.get("/getAllProducts", productController.getAllProducts);
router.get("/:id", productController.getSingleProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/published", productController.getPublishedProduct);

// test