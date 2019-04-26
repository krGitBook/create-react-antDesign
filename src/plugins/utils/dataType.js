function dataType(obj) {
    var dom = Object.prototype.toString.call(obj);
    switch (dom) {
        case '[object String]':
            return 'string';
            
        case '[object Number]':
            return 'number';

        case '[object Object]':
            return 'object';   
            
        case '[object Boolean]':
            return 'boolean';
            
        case '[object Symbol]':
            return 'symbol';
            
        case '[object Undefined]':
            return 'undefined';
            
        case '[object Null]':
            return 'null';
            
        case '[object Function]':
            return 'function';
            
        case '[object Date]':
            return 'date';
            
        case '[object Array]':
            return 'array';
            
        case '[object RegExp]':
            return 'regExp';
            
        case '[object Error]':
            return 'error';
            
        /**
         * dom节点类型
        */
        case '[object HTMLDocument]':
            return 'node';
            
        case '[object global]':
            return 'global';
            
    }
}
export default dataType;