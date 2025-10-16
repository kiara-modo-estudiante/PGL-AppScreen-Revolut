# Paleta de Colores para la Aplicación

Para la selección de los colores he utilizado una herramienta nativa de los dispositivos MacOS:

## Digital Colour Meter

La herramienta Digital Colour Meter permite obtener los valores RGB exactos de cualquier color que aparece en la pantalla, lo que facilita la selección precisa de colores para el diseño de la aplicación.

A continuación, se muestra una captura de pantalla de la herramienta Digital Colour Meter en acción, seleccionando un color en la pantalla, concretamente el azul marino o color secundario:

![Digital Colour Meter en Uso](/docs/images/screenshots/digital-colour-meter-example.png)

Esta acción fue repetida con todos los colores mostrados en la pantalla, obteniendo la siguiente tabla de colores.

## Tabla de Colores

Aquí muestro dichos colores seleccionados a través de esta aplicación, así como su denominación en este proyecto, su nombre común y su valor RGB:

| Imagen del Color                                       | Nombre Común    | Denominación en la App | Valor RGB                |
| ------------------------------------------------------ | --------------- | ---------------------- | ------------------------ |
| ![Color](/docs/images/colors/primary.png)              | Azul Eléctrico  | primary                | rgb(33, 115, 255)        |
| ![Color](/docs/images/colors/secondary.png)            | Azul Marino     | secondary              | rgb(34, 43, 67)          |
| ![Color](/docs/images/colors/background-primary.png)   | Azul Oscuro     | backgroundPrimary      | rgb(2, 8, 24)            |
| ![Color](/docs/images/colors/background-secondary.png) | Azul Medianoche | backgroundSecondary    | rgb(10, 15, 35)          |
| ![Color](/docs/images/colors/text-primary.png)         | Blanco          | textPrimary            | rgb(255, 255, 255)       |
| ![Color](/docs/images/colors/text-secondary.png)       | Gris Claro      | textSecondary          | rgb(160, 160, 170)       |
| ![Color](/docs/images/colors/icon-default.png)         | Gris Plateado   | iconDefault            | rgb(181, 181, 187)       |
| ![Color](/docs/images/colors/icon-active.png)          | Blanco          | iconActive             | rgb(255, 255, 255)       |
| ![Color](/docs/images/colors/button-primary.png)       | Azul Acero      | buttonPrimary          | rgba(118, 140, 187, 0.6) |
| ![Color](/docs/images/colors/button-hover.png)         | Azul Cobalto    | buttonHover            | rgb(75, 100, 150)        |
| ![Color](/docs/images/colors/money-gain.png)           | Verde Esmeralda | moneyGain              | rgb(90, 183, 154)        |

## Fichero de Paleta de Colores

El siguiente archivo contiene la definición de la paleta de colores utilizada en la aplicación:

```typescript
// /theme/color-palette.ts

export const colorPalette = {
  // Colores de la marca
  primary: "rgb(33, 115, 255)",
  secondary: "rgb(28, 36, 57)",

  // Fondo
  backgroundPrimary: "rgb(2, 8, 24)",
  backgroundSecondary: "rgb(10, 15, 35)",

  // Texto
  textPrimary: "rgb(255, 255, 255)",
  textSecondary: "rgb(160, 160, 170)",

  // Iconos
  iconDefault: "rgb(181, 181, 187)",
  iconActive: "rgb(255, 255, 255)",

  // Botones
  buttonPrimary: "rgba(118, 140, 187, 0.6)",
  buttonHover: "rgb(75, 100, 150)",

  // Indicadores financieros
  moneyGain: "rgb(90, 183, 154)",
};

export default colorPalette;
```

Puedes acceder a él en: [Color Palette](../src/theme/color-palette.ts)
