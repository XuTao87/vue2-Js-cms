export function crumbs(url, menuList = []) {
    let lists = []

    function xcc(arr = []) {
        for (const item of arr) {
            if (item.type === 1) {
                const find = xcc(item.children)
                if (find) {
                    lists.push(item)
                    lists.push(find)
                    return find
                }
            } else if (item.url === url) {
                return item

            }
        }
    }
    xcc(menuList)
    return lists
}