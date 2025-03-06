
export function authCheck() {
  return localStorage.getItem("login") === "true";
}
