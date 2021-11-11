import * as f from "./App.js";

  describe("Fechas", () => {
    it("deberia retornar la fecha", () => {
      var expectedDate = new Date("2021-11-10").toISOString().split('T')[0];
      expect(f.getDate("2021-11-10")).toEqual(expectedDate);
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
  });

