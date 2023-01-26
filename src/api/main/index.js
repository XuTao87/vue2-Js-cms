import service from "../../requset/index";
// 用户管理列表
export function userLists(v, url) {
  return service({
    url: `/${url}/list`,
    method: "POST",
    data: v,
  });
}

// 部门列表
export function departmentList(v) {
  return service({
    url: "/department/list",
    method: "POST",
    data: v,
  });
}

// 角色列表
export function roleList(v, url) {
  return service({
    url: "/role/list",
    method: "POST",
    data: v,
  });
}

// 创建用户
export function establishUser(v) {
  return service({
    url: "/users",
    method: "POST",
    data: v,
  });
}

// 编辑用户
export function compileUser(data, id, url) {
  return service({
    url: `/${url}/` + id,
    method: "PATCH",
    data: data,
  });
}

// 删除用户

export function deleatUser(id, url) {
  return service({
    url: `/${url}/` + id,
    method: "DELETE",
  });
}

//  创建权限列表
export function applyUserList(data) {
  return service({
    url: "/role",
    method: "POST",
    data: data,
  });
}

// 修改角色
export function alterList(data) {
  return service({
    url: "/role",
    method: "POST",
    data: data,
  });
}
