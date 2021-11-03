import * as f from "./App.js";

describe("Etiquetas ingresadas por usuario", () => {
    it("deberia retornar la etiqueta con #", () => {
      expect(f.returnEtiqueta("etiqueta1")).toEqual("#etiqueta1");
    });
    it("deberia retornar la fecha", () => {
      var expectedDate = new Date("2021-11-10").toISOString().split('T')[0];
      expect(f.getDate("2021-11-10")).toEqual(expectedDate);
    });
  });

