class Tree {
  constructor( node ) {
    this.root = node
    if( !(node instanceof TreeNode) ) {
      this.root = new TreeNode( node )
    }
  }
  getRootNode() {
    return this.root
  }
}
class TreeNode {
  constructor( value ) {
    this.value = value
    this.children = []
  }
  getValue() {
    return this.value
  }
  setValue( value ) {
    this.value = value
  }
  getChildren() {
    return this.children
  }
}
module.exports = {
  Tree: Tree,
  TreeNode: TreeNode
}