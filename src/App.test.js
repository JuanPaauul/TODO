import {returnEtiqueta} from "./App.js";

describe("Etiquetas ingresadas por usuario", () => {
    it("deberia retornar la etiqueta con #", () => {
      expect(returnEtiqueta("etiqueta1")).toEqual("#etiqueta1");
    });
  });