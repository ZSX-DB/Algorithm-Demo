const validIPAddress = IP => {
    if (IP.includes('.')) {
        IP = IP.split('.')
        const checkIPv4Item = str => str.length === 0 || str.length > 3 || (str.length !== 1 && str[0] === '0') || (Number(str) > 255 || Number(str) < 0) || str.replace(/[0-9]/g, '').length > 0
        return (IP.length !== 4 || IP.some(checkIPv4Item)) ? 'Neither' : 'IPv4'
    } else if (IP.includes(':')) {
        IP = IP.split(':')
        const checkIPv6Item = str => /^[0-9a-fA-F]{1,4}$/.test(str) === false
        return (IP.length !== 8 || IP.some(checkIPv6Item)) ? 'Neither' : 'IPv6'
    } else {
        return 'Neither'
    }
}

console.log(validIPAddress('172.16.254.0:'))
console.log(validIPAddress('172.16.254.'))
console.log(validIPAddress('172.16.254.01'))
console.log(validIPAddress('333.16.254.0'))
console.log(validIPAddress('172.-16.254.0'))
console.log(validIPAddress('172.16.254.30'))
console.log(validIPAddress('172.16.254.0'))
console.log(validIPAddress("1e1.4.5.6"))
console.log(validIPAddress('172.16.254.1'))
console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"))
console.log(validIPAddress('2001:0db8:85a3:0::8A2E:0370:7334'))
console.log(validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334'))
console.log(validIPAddress('ffff:db8:85a3:0:0:8A2E:0370:7334'))
console.log(validIPAddress('ffffj:db8:85a3:0:0:8A2E:0370:7334'))
console.log(validIPAddress('fffy:db8:85a3:0:0:8A2E:0370:7334'))
