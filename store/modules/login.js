const Cookies = require('js-cookie');

const defaultState = {
    user: {
      auth: false,
      token: null,
    },
    modal: {
        status: false,
        message: null,
    },
  }

const inBrowser = typeof window !== 'undefined';
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;

const actions = {
  // Client tarafında çalışmaktadır.

    async getLogin({ commit }, data) {
        await this.$axios
        .post("/api/login/", data)
        .then(result => {
          if(result.data.status === false) {
            //this.modal('Uyarı', result.data.message);
            commit('changeModal', result.data);
          }
          else {
            //this.modal('Başarılı', result.data.message);
            // console.log('Login state action getLogin tarafı: ' + process.client);
            localStorage.setItem('token', result.data.token);
            Cookies.set('token', result.data.token);
            commit('changeToken', result.data);
            this.$router.push('/panel');
          }
        })
        .catch(err => {
          // this.modal('Hata', 'Veritabanı bağlantısı sağlanamadı, lütfen daha sonra tekrar deneyiniz');
          // console.log(err);
          // this.errors.push(err);
        });
    },

    logOut({ commit }, data) {
      data.auth = null;
      data.token = '';
      commit('changeToken', data);
    },
}

const mutations = {
    changeModal(state, data) {
        state.modal.status = true;
        state.modal.message = data.message;
    },
    changeToken(state, data) {
      state.user.token = data.token;
      state.user.auth = data.status;
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
