function isValidPassword(password) {
    return password.lenth < 8 || password.includes(' ') || password.includes('username') ? false : true;
}

console.log(isValidPassword("1122222222"));
console.log(isValidPassword("1122 222222"));