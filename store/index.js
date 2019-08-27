import Vuex from "vuex";

const createState = () => {
    return new Vuex.Store({
        state: () => ({
            counter: 0,
        }),
        mutations: {
            increment (state) {
                state.counter++;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                console.log(vuexContext);
            }
        },
        getters: {}

    });
}

export default createState;