//Limpiar los inputs
export function cleanInputs(ids = []) {
  ids.map((id) => {
    document.getElementById(id).value = null;
    return true;
  });
}
//Verificar que todos los campos esten llenos
export function checkInputValues(ids = []) {
  return !ids
    .map((id) => {
      const valueInput = document.getElementById(id).value;
      if (valueInput === null || valueInput === "") return false;
      else return true;
    })
    .includes(false);
}
