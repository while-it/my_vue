/**
 * 
 * @param {*} obj 监听的对象
 * @param {*} key 监听的key
 * @param {*} value 初始值
 */
function defineReactive(obj,key,value){
    // 递归监听属性值为对象时
    observe(value)
    Object.defineProperty(obj,key,{
        get(){
            console.log('hello_get',value)
            return value
        },
        set(v){
            console.log('hello_set',v)
            if(v!==value){
                val = v;
                observe(v);
            }
        }
    })
}
function set(obj,key,val){
    defineReactive(obj,key,val)
}

function observe(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj
    }
    Object.keys(obj).forEach(key=>defineReactive(obj,key,obj[key]))
}
let obj = {
    foo:'foo',
    bar:'bar'
}
observe(obj)
