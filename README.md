# 🔧 Roblox Toolkit

**Tu compañero definitivo para Roblox** - Las herramientas más completas para desarrolladores y jugadores de Roblox.

![Roblox Toolkit](https://img.shields.io/badge/Roblox-Toolkit-blue?style=for-the-badge&logo=roblox)
![Version](https://img.shields.io/badge/Version-1.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## ✨ Características

### 🧮 **Tax Calculator**
- Calcula automáticamente el 30% de comisión que toma Roblox
- Interfaz intuitiva y fácil de usar
- Resultados instantáneos

### 💰 **DevEx Calculator**
- Convierte Robux a dinero real usando las tasas oficiales de DevEx
- Soporte para 50+ monedas internacionales
- Mínimo de 30,000 Robux requerido
- Tasas de cambio actualizadas

### 👕 **UGC Tax Calculator**
- Calcula ganancias de User Generated Content
- Análisis por hora, día y mes
- Gráficos interactivos de proyección
- Estadísticas detalladas de ingresos

### ❓ **FAQ Completo**
- Respuestas a preguntas frecuentes sobre Roblox
- Información sobre comisiones y DevEx
- Guías para optimizar ganancias

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño
- **Recharts** - Gráficos interactivos
- **Lucide React** - Iconografía
- **Vite** - Build tool y desarrollo

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/roblox-toolkit.git
   cd roblox-toolkit
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Build para Producción

```bash
# Construir la aplicación
npm run build

# Vista previa del build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── TaxCalculator.tsx
│   ├── UGCCalculator.tsx
│   ├── DevExCalculator.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── data/               # Datos estáticos
│   ├── currencies.ts
│   └── faq.ts
├── types/              # Definiciones TypeScript
│   └── index.ts
├── utils/              # Utilidades
│   └── calculations.ts
└── App.tsx            # Componente principal
```

## 🎨 Características de Diseño

- **Tema Ónice**: Colores oscuros elegantes como Discord
- **Glassmorphism**: Efectos de cristal y blur para modernidad
- **Responsive**: Adaptable a todos los dispositivos
- **Animaciones**: Transiciones suaves y micro-interacciones
- **Accesibilidad**: Diseño inclusivo y navegable

## 🌍 Monedas Soportadas

Soporte completo para 50+ monedas de países donde se usa Roblox:

- **Américas**: USD, CAD, MXN, BRL, ARS, CLP, COP, PEN, UYU, BOB
- **Europa**: EUR, GBP, CHF, NOK, SEK, DKK, PLN, CZK, HUF, RON
- **Asia-Pacífico**: JPY, KRW, CNY, HKD, SGD, AUD, NZD, INR, PHP, THB
- **Medio Oriente y África**: AED, SAR, QAR, KWD, BHD, OMR, ILS, TRY
- **Y muchas más...**

## 📊 Funcionalidades de Cálculo

### Tax Calculator
- Entrada: Cantidad de Robux
- Salida: Robux después del 30% de comisión
- Fórmula: `robux * 0.7`

### DevEx Calculator
- Entrada: Robux (mínimo 30,000)
- Salida: Dinero real en moneda seleccionada
- Tasa: $0.0035 USD por Robux

### UGC Calculator
- Entrada: Precio del UGC + Número de ventas
- Salida: Ganancias netas, ingresos brutos, comisión
- Gráficos: Proyección temporal de ganancias

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Créditos

**Desarrollado por Mystic Rose Studios**

- 🎮 [Perfil de Roblox](https://www.roblox.com/users/YOUR_USER_ID/profile)
- 💬 [Discord Server](https://discord.gg/YOUR_DISCORD)
- 🐦 [Twitter](https://twitter.com/YOUR_TWITTER)
- 📺 [YouTube](https://youtube.com/YOUR_CHANNEL)

## ⚠️ Disclaimer

Esta herramienta no está afiliada con Roblox Corporation. Todos los cálculos son estimaciones basadas en las tasas oficiales públicas de Roblox y pueden variar.

---

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**