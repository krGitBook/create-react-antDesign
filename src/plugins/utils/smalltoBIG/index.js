export default function (n) {
    var fraction = ['角', '分'];
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    var head = n < 0 ? '负' : '';
    n = Math.abs(n);

    var s = '';

    let strL =(n+'').split('.').length;
    let xiaoshu = '00';
    if(strL>1){
        xiaoshu = (n+'').split('.')[1]
    }

    for (var i = 0; i < fraction.length; i++) {
        if(digit[xiaoshu[i]]){
            s += (digit[xiaoshu[i]] + fraction[i]).replace(/零./, '');

        }
    }
    s = s || '整';
    n = Math.floor(n);

    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p;
        n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
} 
