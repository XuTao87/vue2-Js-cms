export function mens(list = []) {
  console.log(list);
  const arr = [];
  function add(item) {
    item.forEach((v) => {
      if (v.type === 2) {
        arr.push(v);
      } else {
        add(v.children);
      }
    });
  }
  add(list);
  let maps = arr.map((v) => v.id);
  return maps;
}
