const Tree = require("./tree").Tree
const TreeNode = require("./tree").TreeNode
const data = require("./booksMoviesData")
/////////////////////////////////////////////////
//
//  Pair Programming 01
//
// Write a program that creates the product catalogue from the booksMoviesData.js file.
// Products <-- Tree
// -- RootNode
//    -- Children
// - book
// - book
// - movie
// - movie
// - book
function createChildren(productArray) {
  debugger;
    let products = new Tree("Products")
    let productsChildren = products.getRootNode().getChildren()
    for (let product of productArray) {
        let categoryNode = getCategoryNode(productsChildren, product.type)
        let newProduct = new TreeNode(product)
        categoryNode.getChildren().push(newProduct)
    }
  return productsChildren
}

function getCategoryNode(productsChildren, productType) {
    let allProducts = {}
    if (!allProducts[productType]) {
        allProducts[productType] = new TreeNode(productType)
        productsChildren.push(allProducts[productType])
    }
  return allProducts[productType]
}

// write recursive function that takes an array of children
// outside of that, pass in the tree's root node of children into there 

function printCatalogue(node){
  console.log('Node:', node)
  if (node.children){
    for (let i = 0; i < node.children.length; i++) {
      printCatalogue(node.children[i])
    }
  }
}

printCatalogue(data)