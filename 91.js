// var numDecodings = function(s) {
//     // 处理前导 0
//     s = s.replace(/^0+/, "");
//     if (s.length === 0) return 0;
//
//
//     let list = [];
//     // console.log(s.indexOf("0"), s.substring(0, 2), s.substring(2, 4), s.substring(4));
//     while (s.includes("0")) {
//         const idx = s.indexOf("0");
//         list.push(s.substring(0, idx - 1), s.substring(idx - 1, idx + 1));
//         s = s.substring(idx + 1);
//     }
//     list.push(s);
//     list = list.filter(item => item !== "" && item !== "0");
//     // return list;
//     const getNum = str => {
//         if (str.length === 1) return 1;
//         if (str.length === 2) {
//             if (str[1] === "0") return 1;
//             if (Number(str) > 26) return 1;
//             // if (Number(str) > 26) return 0;
//             return 2;
//         }
//     };
//
//     return list.map(item => {
//         // if (item.length === 1) return 1;
//         // if (item.length === 2) {
//         //   if (item[1] === "0") return 1;
//         //   if (Number(item) > 26) return 1;
//         //   return 2;
//         // }
//         if (item.length <= 2) return getNum(item);
//         // const dp = [getNum(item[0]), getNum(`${item[0]}${item[1]}`)];
//         const dp = new Array(item.length).fill(0);
//         dp[0] = getNum(item[0]);
//         dp[1] = getNum(`${item[0]}${item[1]}`);
//         for (let i = 2; i < item.length; i++) {
//             // dp[i] = Math.max(dp[i - 1] * getNum(item.substring(i, i + 1)), dp[i - 2] * getNum(item.substring(i - 1, i + 1)));
//             if (Number(item.substring(i - 1, i + 1)) > 26) {
//                 dp[i] += dp[i - 1] * getNum(item.substring(i, i + 1));
//             } else {
//                 dp[i] += dp[i - 2] * getNum(item.substring(i - 1, i + 1)) - 1;
//                 // dp[i] = dp[i - 1] * getNum(item.substring(i, i + 1)) + dp[i - 2] * getNum(item.substring(i - 1, i + 1)) - 1;
//             }
//
//         }
//         console.log("dp", dp);
//         return dp[dp.length - 1];
//     });
//
// };

var numDecodings = function(s) {
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; ++i) {
        if (s[i - 1] !== '0') {
            f[i] += f[i - 1];
        }
        if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            f[i] += f[i - 2];
        }
    }
    return f[n];
};
