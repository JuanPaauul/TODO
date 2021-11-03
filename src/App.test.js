import * as f from "./App.js";

describe("Etiquetas ingresadas por usuario", () => {
    it("deberia retornar la etiqueta con #", () => {
      expect(f.returnEtiqueta("etiqueta1")).toEqual("#etiqueta1");
    });
  });

