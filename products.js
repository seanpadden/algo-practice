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
  return products
}

let allProducts = {}

function getCategoryNode(productsChildren, productType) {
    if (!allProducts[productType]) {
        allProducts[productType] = new TreeNode(productType)
        productsChildren.push(allProducts[productType])
    }
  return allProducts[productType]
}

let productTree = createChildren(data)


function printNodes(children){
  for (let i = 0; i < children.length; i++){
    let child = children[i]
    if (child.getChildren().length) {
      console.log(`  ${child.getValue()}  `)
      printNodes(child.children)
    }
    else {
      console.log(`  ${child.getValue().title}  `)
    }
  }
}

let rootNode = productTree.getRootNode()
console.log(rootNode.value)
printNodes(rootNode.getChildren())
