const cookieparser = process.server ? require('cookieparser') : undefined
import Vuex from 'vuex';
import loginModule from './modules/login';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      loginModule: loginModule,
    },
    actions : {
      // Buradaki action her sayfa yenilendiğinde çalışmaktadır. Middleware ile karıştırmamak gerekiyor. Linkler arasında gezinti de nuxtserverinit çalışmaz.
      async nuxtServerInit({ commit }, { req }, state) {
         if (req.headers.cookie) {
          const parsed = await cookieparser.parse(req.headers.cookie)
          parsed.auth = true;
          commit('loginModule/changeToken', parsed);
        }
      },
    },
  });
};

export default createStore