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
        // Cookie var mı diye bakıyoruz, eğer varsa parse edip içerisinde token key'ini arıyoruz.
        if (req.headers.cookie) {
          const parsed = await cookieparser.parse(req.headers.cookie)
          console.log('nuxtServerInit çalıştı !!');
          // Cookie içerisinde token key'i varsa state içerisinde güncelleme yapıyoruz.
          if(parsed.token) {
            parsed.auth = true;
            commit('loginModule/changeToken', parsed);
          }
        }
        else {
          const parsed = {
            auth: false,
            token: null
          };
          commit('loginModule/changeToken', parsed);
        }
      },
    },
  });
};

export default createStore