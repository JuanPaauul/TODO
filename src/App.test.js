import * as f from "./App.js";
import fs from "fs";
  describe("Fechas", () => {
    it("deberia retornar la fecha", () => {
      var expectedDate = new Date("2021-11-10").toISOString().split('T')[0];
      expect(f.getDate("2021-11-10")).toEqual(expectedDate);
    });
    it("deberia retornar la fecha_2", () => {
      var expectedDate = new Date("2018-12-11").toISOString().split('T')[0];
      expect(f.getDate("2018-12-11")).toEqual(expectedDate);
    });
    it("deberia retornar la fecha_3", () => {
      var expectedDate = new Date("1997-05-05").toISOString().split('T')[0];
      expect(f.getDate("1997-05-05")).toEqual(expectedDate);
    });
  });
  describe("Categorias", () => {
    beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("index.html", "utf8");
      require("./index.js");
    });

    it("deberia retornar la categoria por defecto", () => {
      const taskType = document.getElementById("task-type");
      //const boton_elem = document.getElementById("type-task").value = "Trabajo";
      if(taskType != null){
        var categoria = String(taskType.value);
      }
      expect( categoria).toEqual("Estudio");
    });
    it("deberia retornar la categoria elegida", () => {
      const taskType = document.getElementById("task-type");
      if(taskType != null){
        taskType.value="Trabajo";
        var categoria = String(taskType.value);
      }
      expect( categoria).toEqual("Trabajo");
    });
    it("deberia retornar la categoria elegida", () => {
      const taskType = document.getElementById("task-type");
      if(taskType != null){
        taskType.value="Deberes";
        var categoria = String(taskType.value);
      }
      expect( categoria).toEqual("Deberes");
    });

    afterEach(() => {
      const lista_elem = document.querySelector("#list-task");
      lista_elem.innerHTML = "";
    });
  });
  describe("Etiquetas ingresadas por usuario", () => {
    it("deberia retornar la etiqueta con #", () => {
      expect(f.returnEtiqueta("etiqueta1")).toEqual("#etiqueta1");
    });
    it("deberia retornar 2 etiquetas ", () => {
      expect(f.returnEtiqueta("etiqueta1,etiqueta2")).toEqual("#etiqueta1 #etiqueta2");
    });
    it("deberia retornar 3 etiquetas ", () => {
      expect(f.returnEtiqueta("etiqueta1,etiqueta2,etiqueta3")).toEqual("#etiqueta1 #etiqueta2 #etiqueta3");
    });
    it("Deberia retornar las etiquetas sin tomar en cuenta los espacios", () => {
      expect(f.returnEtiqueta("etiqueta1, etiqueta2, etiqueta3")).toEqual("#etiqueta1 #etiqueta2 #etiqueta3");
    });
    it("Deberia retornar las etiquetas evitando etiquetas repetidas", () => {
      expect(f.returnEtiqueta("etiqueta1, etiqueta2, etiqueta2")).toEqual("#etiqueta1 #etiqueta2");
    });
  });

