// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Monday';
//     break;
//   case 2:
//     dayName = 'Tuesday';
//     break;
//   case 3:
//     dayName = 'Wednesday';
//     break;
//   case 4:
//     dayName = 'Thursday';
//     break;
//   case 5:
//     dayName = 'Friday';
//     break;
//   case 6:
//     dayName = 'Saturday';
//     break;
//   case 7:
//     dayName = 'Sunday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }

// console.log(`The day is ${dayName}`);

// function processTransaction(transactionType, amount, accountBalance) {
//     switch (transactionType) {
//       case 'DEPOSIT':
//         // Validate and process deposit logic
//         accountBalance += amount;
//         logTransaction('Deposit', amount);
//         break;
//       case 'WITHDRAWAL':
//         // Validate and process withdrawal logic
//         if (amount <= accountBalance) {
//           accountBalance -= amount;
//           logTransaction('Withdrawal', amount);
//         } else {
//           console.log('Insufficient funds for withdrawal.');
//         }
//         break;
//       case 'TRANSFER':
//         // Validate and process transfer logic
//         if (amount <= accountBalance) {
//           accountBalance -= amount;
//           logTransaction('Transfer', amount);
//         } else {
//           console.log('Insufficient funds for transfer.');
//         }
//         break;
//         case 'CHECK_BALANCE':
//       // Display current balance without any transaction
//       logTransaction('Current Balance', accountBalance);
//       break;
//       default:
//         console.log('Invalid transaction type.');
//     }
  
//     return accountBalance;
//   }
  
//   function logTransaction(type, amount) {
//     console.log(`Transaction: ${type} - Amount: $${amount}`);
//   }
  
//   // Example usage:
//   let currentBalance = 1000;
// //   currentBalance = processTransaction('DEPOSIT', 500, currentBalance);
//   currentBalance = processTransaction('WITHDRAWAL', 200, currentBalance);
//   currentBalance = processTransaction('TRANSFER', 300, currentBalance);
//   currentBalance = processTransaction('CHECK_BALANCE', 0, currentBalance);

