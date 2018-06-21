var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {
    return array.sort(function (left, right) {

        var leftTypof,
            rightTypof;

        if (isNull(left)){
            leftTypof = 'null';
        } else {
            leftTypof = typeof left;
        };

        if (isNull(right)){
            rightTypof = 'null';
        } else {
            rightTypof = typeof right;
        };

        if (dataPriority.indexOf(leftTypof) !== dataPriority.indexOf(rightTypof)) {

            if (dataPriority.indexOf(leftTypof) > dataPriority.indexOf(rightTypof)) {
                return 1;
            } else { 
                return -1;
            } 

        } else {

            if (left !== right){
                
                if (left > right) {
                    return 1;
                } else {
                    return -1;
                };

            } else {
                return 0;
            }
        }
    });
}

function isNull(value) {
    if (value === null) {
        return true;
    };
}