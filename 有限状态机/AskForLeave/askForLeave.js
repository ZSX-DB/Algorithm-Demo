/**
 * 根据请假流程返回请假结果
 * @param leaveType
 * @returns {boolean}
 */


// 初版, 只有审批通过和拒绝
// const askForLeave = leaveType => {
//
//     // 获取审批结果，会根据不同的实际情况返回不同的结果，此处进行简化
//     const approval = role => Math.random() > 0.2
//
//     const roleFlow = {
//         casualLeave: ['leader', 'hr', 'ceo'],
//         sickLeave: ['leader', 'hr'],
//         flexibleLeave: ['leader', 'ceo']
//     }
//
//     const leaveTypeFlow = roleFlow[leaveType]
//
//     if (leaveTypeFlow === undefined) return false
//
//     for (const flow of leaveTypeFlow) {
//         if (approval(flow) === false) return false
//     }
//
//     return true
//
// }


// 优化版, 添加了可能的重新审批流程
const askForLeave = leaveType => {

    // 获取审批结果，1 成功 2 重新审批 3 失败（最多重新审批3次）
    const approval = role => {
        const num = Math.random()
        if (num < 0.6) {
            return 1
        } else if (num < 0.8) {
            return 2
        } else {
            return 3
        }
    }

    // 审批流程
    const roleFlow = {
        casualLeave: ['leader', 'hr', 'ceo'],
        sickLeave: ['leader', 'hr'],
        flexibleLeave: ['leader', 'ceo']
    }

    const leaveTypeFlow = roleFlow[leaveType]

    if (leaveTypeFlow === undefined) return false

    // 重新审批次数
    let modifyCount = 0

    for (let i = 0; i < leaveTypeFlow.length; i++) {

        const approvalResult = approval(leaveTypeFlow[i])

        if (approvalResult === 1) continue

        if (approvalResult === 2 && modifyCount < 3) {
            modifyCount++
            leaveTypeFlow.splice(i + 1, 0, leaveTypeFlow[i])
            continue
        }

        if ((approvalResult === 2 && modifyCount >= 3) || approvalResult === 3) return false
    }

    return true

}


console.log(askForLeave('casualLeave'))
console.log(askForLeave('sickLeave'))
