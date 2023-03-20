function generateOTP(limit) {
    let digits = '0123456789';
    let OTP ='';
    for (let i = 0; i < limit; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
//output
console.log(generateOTP(4)); //8237
console.log(generateOTP(6)); //711927