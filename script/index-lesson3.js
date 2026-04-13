function isValidPassword(password, username) {
    return password.length < 8 || 
    password.includes(' ') || 
    password.includes(username) ? false : true;
}

console.log(isValidPassword("1122222222", "john"));
console.log(isValidPassword("1122 222222", "john"));