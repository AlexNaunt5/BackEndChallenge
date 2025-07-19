# Prueba Técnica – Backend Developer

## 🗂 Estructura del Proyecto

```
estructura-categorias-api/
├── categorias.json            # Archivo con la estructura jerárquica de categorías
├── main.js                    # Código JavaScript que resuelve los dos ejercicios
└── README.md                  # Documentación del proyecto
```

---

## Descripción de los Ejercicios

### Parte 1: Rutas completas de categorías

Se implementa una función recursiva que recibe una estructura de categorías anidadas y devuelve una lista de rutas completas desde la raíz hasta cada subcategoría final.

**Ejemplo de salida esperada:**

```js
[
  "Electrónica/Computadoras/Laptops",
  "Electrónica/Computadoras/Desktops",
  "Electrónica/Celulares",
  "Electrónica/Accesorios"
]
```

---

### Parte 2: Búsqueda de categoría por ID

Se implementa otra función recursiva que recibe una estructura de categorías y un ID, y devuelve el objeto de la categoría que coincida con ese ID, sin importar en qué nivel de profundidad se encuentre.

**Ejemplo de entrada y salida:**

```js
buscarCategoriaPorId(categorias, 6);
```

```json
{
  "id": 6,
  "name": "Desktops",
  "subcategories": []
}
```

---

## 🚫 Restricciones cumplidas

- ✅ Solo se utilizaron estructuras de control tradicionales (`if`, `while`, `for`, etc.).
- ❌ No se utilizaron métodos funcionales como `map`, `reduce`, `filter`, `flat`, `forEach`, etc.

---

## ▶️ Cómo ejecutar el código

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/estructura-categorias-api.git
cd estructura-categorias-api
```

2. Abre `soluciones.js` y ejecuta el archivo con Node.js:

```bash
node main.js
```
