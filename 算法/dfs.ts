const tree = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        {
          name: 'D'
        },
        {
          name: 'E'
        },
        {
          name: 'F'
        }
      ]
    },
    {
      name: 'C',
      children: [
        {
          name: 'G',
        },{
          name: 'H'
        }
      ]
    }
  ]
}


// 递归
function dfs0(tree){
  if(tree.name){
    console.log(tree.name)
  }
  if(tree.children){
    tree.children.forEach(item => {
      dfs0(item)
    })
  }
}

// 非递归
function dfs1(tree) {
  const stack = []
  stack.push(tree)
  while(stack.length) {
    let cur = stack.pop()
    console.log(cur.name)
    if(cur.children){
      cur.children.reverse().forEach(item => {
        stack.push(item)
      })
    }
  }
}


dfs0(tree) //  A B D E F C G H
dfs1(tree) //  A B D E F C G H