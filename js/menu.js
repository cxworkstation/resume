/**
 * Created by perfect on 2015/6/19.
 */
function init() {
    var navUlDom=document.getElementsByName('nav')[0];
    var chs=navUlDom.children;
    var i=0;
    Array.prototype.forEach.call(chs,function(li) {
        if (i!=0) {//避免第一个商标li元素也相应click事件
            li.addEventListener('click', function () {
                Array.prototype.forEach.call(chs, function (li) {
                    var attrs = li.getAttribute("class");
                    if (attrs) {//如果存在样式，才进行下面的操作
                        var attrArray = attrs.split(' ');
                        var newAttr = '';
                        for (var i = 0; i < attrArray.length; i++) {
                            if (attrArray[i] == ' ') {
                                continue;
                            }
                            if (attrArray[i] != 'on') {//如果类名不为on的才又被加进来，也就是去掉了类名on
                                newAttr += attrArray[i] + ' ';
                                continue;
                            }
                        }
                        li.setAttribute('class', newAttr);
                    }
                });

                var attrs_ = li.getAttribute('class');//先得到元素本身的class值，然后连同on一同设置进去，要不然会被覆盖
                var newAttr = '';
                if (attrs_) {
                    var attrArray = attrs_.split(' ');
                    for (var i = 0; i < attrArray.length; i++) {
                        newAttr += attrArray[i] + ' ';
                    }
                }
                newAttr += 'on';
                li.setAttribute('class', newAttr);
                var myhref=li.getAttribute('myhref');
                location.href=myhref;
            });
        }
        i++;
    });
}
