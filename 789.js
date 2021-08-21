const escapeGhosts = (ghosts, target) => ghosts.every(ghost => (Math.abs(target[0] - ghost[0]) + Math.abs(target[1] - ghost[1])) > (Math.abs(target[0]) + Math.abs(target[1])))

console.log(escapeGhosts([[1, 0], [0, 3]], [0, 1]))
