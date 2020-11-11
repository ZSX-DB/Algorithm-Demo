/**
 * 动态规划
 */


//看以下数据
//1 5 3 4 6 9 7 8    其对应的索引分别为0-7
//以f(x)为例，其为以x结尾最长上升子序列的长度(x为最大值)
//如果x>p,那么f(x)=f(p)+1


//最长上升子序列

function getMaxLis(...args) {

    let len=args.length;

    let arr=[];
    for(let i=0;i<len;i++){
        arr[i]=0;
    }

    // maxLen为最长子串的长度
    let maxLen=0;

    for(let i=0;i<len;i++){
        for(let j=0;j<i;j++){
            if(args[i]>args[j]){
                arr[i]=Math.max(arr[i],arr[i]+1)
            }
        }
        maxLen=Math.max(maxLen,arr[i])
    }

    return maxLen

}

console.log(getMaxLis(1,5,3,4,6,9,7,8))







