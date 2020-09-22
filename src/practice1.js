const parseData = (input) => {
    // TODO 后面不再修改的变量用 const声明
    // TODO 解构可以优化到函数接受参数中
    let {data, column} = input
    // TODO 使用map做数组与数组的转化，不用声明新数组
    const resultList = [];
    // TODO 未使用的变量
    let dataCount = 0;
    data.forEach(data => {
        let newObj = {};
        // TODO forEach中函数的第二个参数就是index，不用单独声明
        let dataCount = 0;
        data.forEach(dataElement => {
            newObj[column[dataCount].name] = dataElement;
            dataCount++;
        })
        resultList.push(newObj);
    });
    return resultList;
}

export {parseData};
