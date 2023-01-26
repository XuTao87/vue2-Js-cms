let firstMenu = null

export function mapMenusToRouter(userMenus) {
    const routes = []
    const allRoutes = []
    const routeFiles = require.context('../router/main', true, /\.js/)
    routeFiles.keys().forEach((key) => {
        const route = require('../router/main' + key.split('.')[1])
        allRoutes.push(route.default)
    })
    const _recurseGerRoute = (menus) => {
        for (const menu of menus) {
            if (menu.type === 2) {
                const route = allRoutes.find((route) => route.path === menu.url)
                if (route) routes.push(route)
                if (!firstMenu) {
                    firstMenu = menu
                }
            } else {
                _recurseGerRoute(menu.children)
            }
        }
    }
    _recurseGerRoute(userMenus)
    return routes
}
export {firstMenu}