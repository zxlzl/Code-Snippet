const oldNode = {
  type: 'div',
  children: [{
    type: 'p',
    content: 'asklj'
  }]
}

const newNode = {
  type: 'div',
  children: [{
    type: 'p',
    children:[
      {
        type: 'p',
        content: 's'
      }
    ]
  }]
}

function render(oldnode, parent?) {
  oldnode.result = document.createElement(oldnode.type)
  if (oldnode.content) {
    oldnode.result.innerHTML = oldnode.content
  }
  parent && parent.appendChild(oldnode.result)
  if (oldnode.children) {
    oldnode.children.forEach(item => {
      render(item, oldnode.result)
    })
  }
  return oldnode
}


function sync(newnode, oldnode) {
  if (Array.isArray(newnode) && Array.isArray(oldnode)) {
    let index = 0
    newnode.forEach((item, i) => {
      if (item.type === oldnode[i].type) {
        index++
        item.result = oldnode[i].result
        if (item.content !== oldnode[i].content) {
          item.result.innerHTML = item.content ? item.content : ''
        }
        if (item.children) {
          if (oldnode[i].children) {
            sync(item.children, oldnode[i].children)
          } else {
            item.children.forEach(child => {
              item.result.appendChild(render(child).result)
            })
          }
        }
      } else {
        let parent = oldnode[i].result.parentNode
        parent.insertBefore(render(item).result, oldnode[i].result)
        parent.removeChild(oldnode[i].result)
        index++
      }
    })
    for (let i = index; i < oldnode.length; i++) {
      let item = oldnode[i].result
      item.parentNode.removeChild(item)
    }
  } else {
    if (oldnode) {
      if (!oldnode.result) {
        oldnode = render(oldnode)
        sync(newnode, oldnode)
      } else {
        let node = newnode.result = oldnode.result
        if (newnode.type !== oldnode.type) { //判断根节点type不同
          oldnode.result.parentNode && oldnode.result.parentNode.removeChild(oldnode.result)
          oldnode = null
        } else { //根节点type相同
          if (newnode.children) {
            if (oldnode.children) {
              sync(newnode.children, oldnode.children)
            } else {
              newnode.children.forEach(child => {
                newnode.result.appendChild(render(child).result)
              })
            }
          }
          if (newnode.content !== oldnode.content) { // 根节点内容不同
            newnode.result.innerHTML = newnode.content ? newnode.content : ''
          }
        }
      }
    } else {
      return render(newnode)
    }
  }
  return newnode.result
}
