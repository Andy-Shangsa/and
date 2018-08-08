const state = {
  SHOW_POPUP: {}
};

const getters = {
  showPopup: state => state.SHOW_POPUP
};

const mutations = {
  UPDATE_POPUP(state, data) {
    state.SHOW_POPUP = Object.assign({}, state.SHOW_POPUP, data);
  },
  CLEAR_POPUP(state) {
    state.SHOW_POPUP = {};
  }
};

const actions = {
  updatePopup: ({ commit }, data) => {
    commit("UPDATE_POPUP", data);
  },
  clearPopup: ({ commit }) => {
    commit("CLEAR_POPUP");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
