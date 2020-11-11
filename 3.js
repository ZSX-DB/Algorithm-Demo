/**
 * 3、无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 * 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */


//暴力法
// function lengthOfLongestSubstring(s) {
//     let slen = s.length, arr = [];
//     //截取出所有的连续字符串
//     for (let i = 0; i < slen + 1; i++) {
//         for (let j = 0; j < slen + 1; j++) {
//             arr.push(s.substring(i, j));
//         }
//     }
//     //数组去重，根据题目要求，此步骤可省略
//     arr = arr.reduce((newArr, item) => {
//         if (newArr.includes(item) === false) {
//             newArr.push(item);
//         }
//         return newArr;
//     }, []);
//     //去除包含重复字符的字符串
//     let aLen = arr.length, newArr = [];
//     for (let k = 0; k < aLen; k++) {
//         if (!/(.).*\1/i.test(arr[k]) === true) {
//             newArr.push(arr[k])
//         }
//     }
//     //newArr[index]为长度最长的字符串，max为其长度
//     let nLen=newArr.length,max=0,index=0;
//     for(let i=0;i<nLen;i++){
//         if(newArr[i].length>max){
//             max=newArr[i].length;
//             index=i;
//         }
//     }
//     return max;
// }


//维护一个数组arr，对原字符串遍历，判断字符是否在arr里面，不在的话就直接push进去，再重新判断max的大小；在的话就将之前重复字符之前的项全部去除，再重新push进去。
function lengthOfLongestSubstring(s){
    let arr=[],index=0,max=0;
    for(const item of s){
        if(arr.includes(item)){
            index=arr.indexOf(item);
            arr.splice(0,index+1);
        }
        arr.push(item);
        console.log(arr);
        max=max>arr.length?max:arr.length;
    }
    return max;
}




console.log(lengthOfLongestSubstring("abcabcbb"));