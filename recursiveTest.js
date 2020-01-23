const tree = {
  title: 'A', 
  children: [
    {
      title: 'B',
      children: [
        {
          title: 'C'
        }
      ]
    },
    {
      title: 'D'
    }
  ]
}

function printCatalogue(node){
  console.log('Node:', node.title)
  if (node.children){
    for (let i = 0; i < node.children.length; i++)
      printCatalogue(node.children[i])
  }
}

printCatalogue(tree)