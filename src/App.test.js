import { returnEtiqueta } from "./App.js";
import { returnDescripcion } from "./App.js";

describe("Etiquetas ingresadas por usuario", () => {
    it("deberia retornar la etiqueta con #", () => {
        expect(returnEtiqueta("etiqueta1")).toEqual("#etiqueta1");
    });
});

describe("Descripcion de la tarea", () => {
    it("deberia retornar la descripcion", () => {
        expect(returnEtiqueta("descripcion")).toEqual("descripcion");
    });
});