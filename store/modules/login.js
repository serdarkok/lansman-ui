const defaultState = {
    user: {},
    modal: {
        status: false,
        message: '',
    },
  }

const inBrowser = typeof window !== 'undefined';
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;

const actions = {
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
            //localStorage.setItem('x-access-token', result.data.token);
            this.$router.push('/panel');
          }
        })
        .catch(err => {
          // this.modal('Hata', 'Veritabanı bağlantısı sağlanamadı, lütfen daha sonra tekrar deneyiniz');
          console.log(err);
          // this.errors.push(err);
        });
    }
}

const mutations = {
    changeModal(state, data) {
        state.modal.status = true;
        state.modal.message = data.message;
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
