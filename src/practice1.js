const parseData = (input) => {
    let {data, column} = input
    const resultList = [];
    let dataCount = 0;
    data.forEach(data => {
        let newObj = {};
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
