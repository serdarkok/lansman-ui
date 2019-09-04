import axios from '@nuxtjs/axios';

export default async function ({store, redirect, app}) {
    console.log('Middleware çalıştı');
  if (store.state.loginModule.user.token) {
    const _data = store.state.loginModule.user;
    await app.$axios.post("/api/verifyToken/", _data)
      .then(result => {
        // console.log('verifyUser.js 9 ' + JSON.stringify(result.data));
        if (result.data.status === false) {         
          store.dispatch('loginModule/logOut', result.data);
          // redirect('/logout');
        }
        else {
          //this.modal('Başarılı', result.data.message);
          // console.log('Login state action getLogin tarafı: ' + process.client);
          // this.$router.push('/panel');
        }
      })
      .catch(err => {
        // this.modal('Hata', 'Veritabanı bağlantısı sağlanamadı, lütfen daha sonra tekrar deneyiniz');
        console.log(err);
        // this.errors.push(err);
      });
  }
  else {
    redirect('/logout');
  }


/*     if (!store.state.loginModule.user.auth) {
     redirect('/logout');
     console.log('user.auth false hatası vermiş');
    } */
  }