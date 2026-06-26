# MARTA · Sitio web

Landing page de **MARTA**, la plataforma de *gestión inteligente para iglesias*.
Construida con **Vite** y publicada en **GitHub Pages** mediante GitHub Actions.

Vite genera los CSS/JS con un *hash* en el nombre (p. ej. `script.a1b2c3.css`),
por lo que **el navegador siempre descarga la versión nueva tras cada
despliegue** — sin problemas de cache.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Landing: hero, características, cómo funciona, métricas y CTA |
| `caracteristicas.html` | Detalle de las herramientas de gestión |
| `precios.html` | Planes (Esencial · Crecimiento · Ministerio) |
| `contacto.html` | Solicitud de demo / contacto |

## Estructura

```
iglesia_website/
├── index.html · caracteristicas.html · precios.html · contacto.html
├── css/styles.css          # Estilos + paleta de marca (variables :root)
├── js/script.js            # Menú móvil, año del footer, formulario
├── img/logo.svg            # Logotipo MARTA (cruz + M en degradado violeta)
├── public/.nojekyll        # Se copia a dist/ (evita Jekyll en Pages)
├── .github/workflows/deploy.yml   # CI: build + deploy a GitHub Pages
├── vite.config.js          # Configuración multipágina
└── package.json
```

## Marca

- **Paleta violeta** definida en las variables `--violet-*` y `--brand-gradient`
  al inicio de `css/styles.css`. Cámbialas ahí para ajustar todo el sitio.
- **Logo:** `img/logo.svg` es una versión vectorial del logotipo (escala sin
  perder nitidez). Si prefieres usar el PNG original, déjalo en `img/logo.png`
  y reemplaza las referencias `./img/logo.svg` por `./img/logo.png` en los HTML.

## Desarrollo local

Requiere [Node.js](https://nodejs.org/) 18+.

```bash
npm install      # instala Vite (solo la primera vez)
npm run dev      # servidor de desarrollo con recarga en caliente
npm run build    # genera dist/ con assets hasheados
npm run preview  # sirve dist/ para revisar el build final
```

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub:

   ```bash
   git init
   git add .
   git commit -m "Sitio MARTA"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

2. En GitHub: **Settings → Pages → Build and deployment**.
3. En *Source* selecciona **GitHub Actions** (no "Deploy from a branch").
4. Cada `push` a `main` compila con Vite y publica en
   `https://TU_USUARIO.github.io/TU_REPO/`.

## Nota sobre los contenidos

Los textos, métricas (+500 iglesias, etc.) y precios son de muestra para la
demostración. Ajústalos en los archivos `.html` según la información real de MARTA.
