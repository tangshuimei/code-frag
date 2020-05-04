// 触发更新视图
function updateView(){
    console.log('视图更新')
}

// 重新定义数组原型：为了不污染全局数组原型，第三方库污染全局数据是大忌
const oldArrayProperty = Array.prototype

// 创建新对象，原型指向 oldArrayProperty，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);

['push','pop','shift','unshift','splice'].forEach(methodName=>{
    arrProto[methodName] = function(){
        updateView() // 触发视图更新
        oldArrayProperty[methodName].call(this, ...arguments)
    }
})

// 重新定义属性，监听起来
function defineReactive(traget,key,value){
    // 深度监听
    observer(value)
    // 核心 API
    Object.defineProperty(traget,key,{
        get(){
            return value
        },
        set(newValue){
            if(newValue != value){
                //设置新值
                
                // 深度监听：设置新值也需要
                observer(value)

                // 注意，value一直在闭包中，此处设置完之后，再get时也是会获取最新的值
                value = newValue
                
                // 触发更新视图
                updateView()
            }
        }
    })
}

// 监听对象属性
function  observer(target){
    // 只监听对象和数组
    if(typeof target !== 'object' || target === null){
        return target
    }

    // 不可以这样，因为会污染全局对象Array.prototype
    // Array.prototype.push = function (param) {  
    //     updateView()
    //     ...
    // }


    if(Array.isArray(target)){
        // 改变__proto__是为了触发observer，因为Object.defineProperty是不会触发数组监听，因为只能用我们重写的arrProto来触发
        target.__proto__ = arrProto
    }
    // 重新定义各个属性（for in 也可以遍历数组）
    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        address: '北京' // 需要深度监听
    },
    nums: [10,20,30]
}

// 监听数据：一旦执行observer，data就是一个响应式数据
observer(data)

data.name = 'list'
data.age = 21 
data.x = 100 // 新增属性，监听不到 -- 所以又Vue.set
delete data.name // 删除属性，监听不到 -- 所以有Vue.delete
data.info.address = '上海' // 深度监听
data.nums.push(4) // 监听数组