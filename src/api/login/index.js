import service from '../../requset/index'

// 用户登录 获取token 和 id
export function login(v) {
    return service({
        url: '/login',
        method: 'POST',
        data: v
    })
}

// 获取用户信息
export function getUser(id) {
    return service({
        url: '/users/' + id,
        method: 'GET',
    })
}
// 获取用户菜单信息
export function getMenus(id) {
    return service({
        url: '/role/' + id + '/menu',
        method: 'GET',
    })
}