import Vuex from 'vuex';
import loginModule from './modules/login';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      loginModule: loginModule,
    }
  });
};

export default createStore