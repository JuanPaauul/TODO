import fs from "fs";
describe("Gestor Tareas", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./index.js");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#task-name");
    const boton_elem = document.querySelector("#submit-button");
    const lista_elem = document.querySelector("#list-task");
    tarea_elem.value = "Primera Tarea";
    boton_elem.click();
    let tabla = document.getElementById("todo-table").rows;
    let last = tabla[tabla.length - 1];
    let cell = last.cells[1];
    let value = cell.innerHTML
    expect(value).toEqual("Primera Tarea");
  });

  it("Al iniciar no hay nada en la lista de tareas", () => {
    const lista_elem = document.querySelector("#list-task");
    expect(lista_elem.innerHTML).toEqual("");
  });

  afterEach(() => {
    const lista_elem = document.querySelector("#list-task");
    lista_elem.innerHTML = "";
  });
});