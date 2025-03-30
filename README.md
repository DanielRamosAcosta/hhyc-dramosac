# Gofio y Mojo

[![Main Workflow Status](https://github.com/danielramosacossta/hhyc-dramosac/actions/workflows/main.yml/badge.svg)](https://github.com/DanielRamosAcosta/hhyc-dramosac/actions)

**Gofio y Mojo** es un proyecto web dedicado a la gastronomía canaria. Aquí encontrarás recetas tradicionales, información sobre ingredientes autóctonos y la historia detrás de los platos más representativos de las Islas Canarias.

## Características

- **Recetas Tradicionales**: Explora recetas como el Escaldón de Gofio y el Timbal de Batata con Almogrote.
- **Diseño Responsivo**: La web está optimizada para dispositivos móviles, tabletas y escritorios.
- **Componentes Reutilizables**: Uso de componentes HTML para facilitar el mantenimiento y la escalabilidad.
- **Animaciones**: Implementación de animaciones con ScrollReveal para mejorar la experiencia del usuario.
- **Despliegue Automático**: Configuración de GitHub Pages para el despliegue continuo.

## Tecnologías Utilizadas

- **HTML5 y CSS3**: Para la estructura y el diseño.
- **Parcel**: Empaquetador de aplicaciones web.
- **PostCSS**: Para compatibilidad con navegadores antiguos.
- **PostHTML Include**: Para la inclusión de componentes HTML.
- **ScrollReveal**: Para animaciones al hacer scroll.
- **Tectonic**: Para la generación de documentación en LaTeX.

## Requisitos Previos

- **Node.js**: Versión actual o LTS.
- **npm**: Administrador de paquetes de Node.js.
- **Tectonic**: Para compilar la documentación en LaTeX (opcional).

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd hhyc-dramosac
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

- `npm run start`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run clean`: Limpia los directorios de caché y producción.
- `npm run build:docs`: Genera la documentación en PDF usando Tectonic.

## Estructura del Proyecto

```
hhyc-dramosac/
├── src/
│   ├── components/       # Componentes HTML reutilizables
│   ├── styles/           # Hojas de estilo CSS
│   ├── assets/           # Imágenes y otros recursos
│   ├── index.html        # Página principal
│   ├── recipes-escaldon.html  # Página de receta: Escaldón
│   ├── recipes-batata.html    # Página de receta: Timbal de Batata
│   └── links.html        # Página de enlaces y bibliografía
├── docs/
│   └── p1.tex            # Documentación en LaTeX
├── package.json          # Configuración del proyecto
└── README.md             # Este archivo
```

## Despliegue

El proyecto está configurado para desplegarse automáticamente en GitHub Pages. Asegúrate de que la rama principal (`main`) esté actualizada y realiza un `push` para activar el flujo de trabajo de GitHub Actions.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Autor

**Daniel Ramos Acosta**  
Proyecto desarrollado como parte del curso de Herramientas HTML y CSS I.
