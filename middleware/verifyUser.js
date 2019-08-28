export default function (context) {
    console.log('Middleware çalıştı');
    console.log(localStorage.getItem('x-access-token'));
  }