import {
  userLists,
  departmentList,
  roleList,
  establishUser,
  compileUser,
  deleatUser,
  applyUserList,
} from "@/api/main";
import loacl from "../../utile/loacl";
import { Message } from "element-ui";
export const menuss = {
  namespaced: true,
  state: {
    usersList: [],
    usersCount: 0,
    departmentList: [],
    departmentCount: 0,
    roleList: [],
    roleCount: 0,
    listUrl: "",
  },
  mutations: {
    GetUserList(state, list) {
      state.usersList = list;
    },
    GetUserCount(state, list) {
      state.usersCount = list;
    },
    GetdepartmentList(state, list) {
      state.departmentList = list;
    },
    GetdepartmentCount(state, list) {
      state.departmentCount = list;
    },
    GetRoleList(state, list) {
      state.roleList = list;
    },
    GetRoleCount(state, list) {
      state.roleCount = list;
    },
    GetlistUrl(state, list) {
      state.listUrl = list;
    },
  },
  actions: {
    async loginUsers({ commit }, playod) {
      const userList = await userLists({ ...playod.pages }, playod.url);
      const { list, totalCount } = userList.data;
      commit("GetUserList", list);
      commit("GetUserCount", totalCount);
      commit("GetlistUrl", playod.url);
    },

    async loginDepartmentList({ commit }, playod) {
      const derpat = await departmentList({ offset: 0, size: 1000 });
      const role = await roleList({ offset: 0, size: 1000 });
      commit("GetdepartmentList", derpat.data.list);
      commit("GetdepartmentCount", derpat.data.totalCount);
      commit("GetRoleList", role.data.list);
      commit("GetRoleCount", derpat.data.totalCount);
    },

    loginEstablishUser({ dispatch, state }, playod) {
      console.log(state);
      if (playod) {
        establishUser(playod).then((v) => {
          if (v.code === 0) {
            Message({
              message: v.data,
              type: "success",
            });
          } else {
            Message({
              message: v.data,
              type: "error",
            });
          }
          dispatch("loginUsers", {
            pages: { offset: 0, size: 5 },
            url: state.listUrl,
          });
        });
      }
    },
    compileUsers({ dispatch, state }, playod) {
      compileUser(playod, playod.id, state.listUrl).then((v) => {
        if (v.code === 0) {
          Message({
            message: v.data,
            type: "success",
          });
        } else {
          Message({
            message: v.data,
            type: "error",
          });
        }
        dispatch("loginUsers", {
          pages: { offset: 0, size: 5 },
          url: state.listUrl,
        });
      });
    },
    deleatUsers({ dispatch, state }, playod) {
      deleatUser(playod, state.listUrl).then((v) => {
        if (v.code === 0) {
          Message({
            message: v.data,
            type: "success",
          });
        } else {
          Message({
            message: v.data,
            type: "error",
          });
        }
        dispatch("loginUsers", {
          pages: { offset: 0, size: 5 },
          url: state.listUrl,
        });
      });
    },
    applyUser({ dispatch, state }, playod) {
      applyUserList({ ...playod }).then((v) => {
        if (v.code === 0) {
          Message({
            message: v.data,
            type: "success",
          });
        } else {
          Message({
            message: v.data,
            type: "error",
          });
        }
        dispatch("loginUsers", {
          pages: { offset: 0, size: 5 },
          url: state.listUrl,
        });
      });
    },
  },
};
