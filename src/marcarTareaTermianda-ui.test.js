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

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#name-task");
    const boton_elem = document.querySelector("#botonclick");
    const lista_elem = document.querySelector("#list-task");
    tarea_elem.value = "Primera Tarea";
    boton_elem.click();
    let tabla = document.getElementById("todo-table").rows;
    let last = tabla[tabla.length - 1];
    let cell = last.cells[1];
    let value = cell.innerHTML
    expect(value).toEqual("Primera Tarea");
  });

  afterEach(() => {
    const lista_elem = document.querySelector("#list-task");
    lista_elem.innerHTML = "";
  });
});