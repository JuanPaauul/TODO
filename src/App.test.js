import * as f from "./App.js";

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

