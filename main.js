function obtenerRutasDeCategorias(category, pathAcumulado) {
  var rutas = [];
  var rutaActual = pathAcumulado ? pathAcumulado + '/' + category.name : category.name;

  if (!category.subcategories || category.subcategories.length === 0) {
    rutas.push(rutaActual);
  } else {
    var i = 0;
    while (i < category.subcategories.length) {
      var subcategoria = category.subcategories[i];
      var rutasSub = obtenerRutasDeCategorias(subcategoria, rutaActual);
      var j = 0;
      while (j < rutasSub.length) {
        rutas.push(rutasSub[j]);
        j++;
      }
      i++;
    }
  }

  return rutas;
}