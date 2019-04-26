function tableSort(dom,callback) {
    if(!dom){
        return ;
    }
    var sortDom = dom.querySelectorAll('.ivu-table-sort');
    for (var i = 0; i < sortDom.length; i++) {
        var everyDom = sortDom[i];
        everyDom.style.width = 'auto';
        everyDom.style.height = '40px';
        var parentDom = everyDom.parentNode;
        var text = parentDom.querySelectorAll('span')[0].innerHTML;
        addIcon(everyDom, dom,text,callback);
    }
   
}
function addIcon(dom, parent, text,callback) {
    dom.innerHTML = '';
    var iconTag = document.createElement("span")
    iconTag.className = getIconTagClass('init');
    dom.appendChild(iconTag);
    iconTag.onclick = function (event) {
        var targetDom = event.target;

        var targetClass = targetDom.className;
        
        allSortInit(parent);
        targetDom.className= getIconTagClass(targetClass);
        callback({ label: text, order: getSortValue(targetClass)})
    }
   
}
function getSortValue(targetClass) {
    if (targetClass ==='kr-table-sort-icon-asc'){
        return 'desc';
    }
    return 'asc';
    
}
function getIconTagClass(value){
    switch (value) {
        case 'kr-table-sort-icon-init':
            return 'kr-table-sort-icon-asc'
            break;
        case 'kr-table-sort-icon-asc':
            return 'kr-table-sort-icon-desc'
            break;
        case 'kr-table-sort-icon-desc':
            return 'kr-table-sort-icon-asc'
            break;
        default:
            return 'kr-table-sort-icon-init'
    }
}
function allSortInit(parent) {
    var doms = parent.querySelectorAll('.ivu-table-sort span')
    for (var i = 0; i < doms.length; i++) {
        var everDom = doms[i];
        everDom.className = getIconTagClass('init')
    }
}
export default tableSort;