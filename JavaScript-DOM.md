# JavaScript-DOM

## DOM基础(1)
*  DOM基础
    * 上面是DOM
    * 浏览器支持情况
*  DOM节点
    * childNodes nodeType
        * 获取子节点
        * children
    * parentNode
        * 例子：点击链接,隐藏整个li
    * offsetParent
        * 例子：获取元素在页面上的实际位置

## DOM基础(2)
* DOM节点(2)
    * 首尾子节点
        * 有兼容性问题
        * firstChild、firstElementChild
        * lastChild、lastElementChild
    * 兄弟节点
        * 有兼容性问题
        * nextSibling、nextElementSibling
        * previousSibling、previousElementSibling

## 操纵元素属性
* 元素属性操作
    * 第一种：oDiv.style.display="block";
    * 第二种：oDiv.style["display"]="block";
    * 第三种：Dom方式
* Dom方式操作元素属性
    * 获取：getAttribute(名称)
    * 设置：setAtrribute(名称)
    * 删除：removeAttribute(名称)

##  DOM元素灵活查找
* 用className选择元素
    * 如何用className选择元素
        * 选出所有元素
        * 通过ClassName条件筛选
    * 封装成函数

## 创建、插入和删除元素
*  创建DOM元素
    * createElement(标签名)
    * appendCgild(节点)
        * 例子：为ul插入li
* 插入元素
    *  insertBefore(节点，原有节点)  
        * 例子：倒序插入li
* 删除DOM元素
    * removeChild(节点)
        * 例子：删除li 

## 文档碎片 
*  文档碎片
    * 文档碎片可以提高DOM操作性能（理论上）
    * 文档碎片原理
    * document.createDocumentFragment()