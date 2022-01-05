
let Id=parseInt (window.localStorage.getItem("idMax")||"0");
const createdId = () => {
  Id += 1;
  window.localStorage.setItem("idMax",JSON.stringify(Id));
  return Id;
}
 export default createdId