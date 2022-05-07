import { createStore, storeKey  } from 'vuex';
export default createStore({
  state: {
    footer:true,
    theme:{

    },
  },
  getters:{
    getTheme(state){
      return state.theme;
    }
  },
  mutations: {
    changeTheme(state,data){
      switch(data){
        case 'default':
          state.theme = {

          }
          break;
        case 'new':
          state.theme = {
            rateIconFullColor: '#07c160',
            sliderBarHeight: '4px',
            sliderButtonWidth: '20px',
            sliderButtonHeight: '20px',
            sliderActiveBackgroundColor: '#07c160',
            buttonPrimaryBorderColor: '#07c160',
            buttonPrimaryBackgroundColor: '#07c160',
          }
          break
      }
    },
    changeFooter(state,data){
      state.footer = data;
    }
  },
  actions: {
  },
  modules: {
  }
})