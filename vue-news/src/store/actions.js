import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        return response
      })
      .catch(error => console.log(error));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => {
        context.commit('SET_ASK', response.data)
      })
      .catch(error => console.log(error));
  },
  // { commit } = context.commit
  // { data } = response.data
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data)
      })
      .catch(error => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_LIST({ commit }, pageName){
    fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data)
      })
      .catch(error => console.log(error))
  },
}
