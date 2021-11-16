import fs from "fs";
describe("Gestor Tareas", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./index.js");
  });

  it("Al iniciar no hay nada en la lista de tareas", () => {
    const rows = document.getElementById("todo-table").rows.length;
    expect(rows).toEqual(1);
  });

  

  afterEach(() => {
    const lista_elem = document.querySelector("#list-task");
    lista_elem.innerHTML = "";
  });
});