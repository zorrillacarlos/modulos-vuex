import getRandom from "@/helpers/getRandom";

const counterStore = {
    namespaced:true,

    state: () =>({
        count: 1,
        lastMutation: "none",
        loading: false,
      }),
      getters: {
        contadorCuadrado(state) {
          return state.count * state.count;
        },
      },
      mutations: {
        incrementar(state){
          state.count++
          state.lastMutation = 'incrementar 1'
        },
        incrementarValor (state, val){
          state.count += val
          state.lastMutation = "incrementar Valor " + val
        },
        setLoading (state, valor){
          state.loading = valor
        }
    
      },
      actions: {
        async incrementoRandom ({commit}){
          commit('setLoading', true)
          const randomNumero = await getRandom()
          commit("incrementarValor", randomNumero)
          commit('setLoading', false)
        }
      },
}

export default counterStore