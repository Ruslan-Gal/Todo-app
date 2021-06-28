const genCode = function (num) {
  var OTP, digits, i;
  digits = '0123456789';
  OTP = '';
  i = 0;
  while (i < num) {
    OTP += digits[Math.floor(Math.random() * 10)];
    i++;
  }
  return String(OTP);
};

const tel1 = '+79510671199'; // 12
const tel2 = '89510671199'; // 11
const tel3 = '9510671199'; // 10

const tel4 = '+799999' + genCode(5); // 12

// console.log(`tel1.length: ${tel1.length}`);
// console.log(`tel2.length: ${tel2.length}`);
// console.log(`tel3.length: ${tel3.length}`);
// console.log(`tel4.length: ${tel4.length}`);

const checkPhoneFormat = (phoneNumber) => {
  const phone = phoneNumber.replace(/ +/g, '').trim();

  console.log(`\nphone: ${phone}`);
  console.log(`phone.length: ${phone.length}`);

  //   if (phone.length === 12 && phone[0] === '+') {
  //     return true;
  //   } else if (phone.length === 11 && phone[0] === '8') {
  //     return true;
  //   } else if (phone.length === 10 && phone[0] === '9') {
  //     return true;
  //   } else {
  //     return false;
  //   }

  if (
    (phone.length === 12 && phone[0] === '+') ||
    (phone.length === 11 && (phone[0] === '8' || phone[0] === '7')) ||
    (phone.length === 10 && phone[0] === '9')
  ) {
    return true;
  } else {
    return false;
  }
};

// let isTruePhoneFormat = checkPhoneFormat(tel1);
// let isTruePhoneFormat = checkPhoneFormat('+7951 067 11 90');
// const isTruePhoneFormat = checkPhoneFormat('8 951 067 11 90');
console.log(checkPhoneFormat('+7 951 067 11 90'));
console.log(checkPhoneFormat('8951 067 11 90'));
console.log(checkPhoneFormat('951 067 11 90'));
console.log(checkPhoneFormat('+9 951 067 11 90'));

console.log('79991627258'.length);
