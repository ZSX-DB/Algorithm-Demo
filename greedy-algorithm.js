/**
 * 贪心算法
 */

//假如有 1，5，10，50，100 的货币面额，给定一个金额total，要求得出最少需要多少张纸币

function getTheLeastOfSheets(total) {

    let common = (totalNum, comparativeNum, count) => {
        if (totalNum >= comparativeNum) {
            count += ((totalNum - totalNum % comparativeNum) / comparativeNum)
            totalNum = totalNum % comparativeNum
        }
        return [count, totalNum]
    }

    let count = 0;

    //当值为15时，count为2
    // let comparativeNumArr = [100, 50, 10, 5, 1];
    //如果一个国家的的10元面额被11元面额替代，当值为15时，count为5，显然此时基于贪心算法的策略不是最优策略
    let comparativeNumArr = [100, 50, 11, 5, 1];

    for (const comparativeNum of comparativeNumArr) {
        let data = common(total, comparativeNum, count);
        count = data[0]
        total = data[1]
    }

    return [count, total]

}


console.log(getTheLeastOfSheets(15))


