

````md
# Frontend - Proyecto Angular

Este repositorio contiene el **frontend desarrollado en Angular**.

---

## 🚀 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión recomendada: 18 o 20)
- **npm**
- **Angular CLI**

Verificar versiones:

```bash
node -v
npm -v
ng version
````

Instalar Angular CLI (si no está instalado):

```bash
npm install -g @angular/cli
```

---

## 📥 Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

Ejemplo:

```bash
git clone https://github.com/usuario/frontend-angular.git
```

Ingresar al proyecto:

```bash
cd frontend
```

---

## 📦 Instalar dependencias

```bash
npm install
```

### ⚠️ Error de permisos en macOS (EACCES)

Si aparece un error de permisos, ejecutar:

```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

> ❌ No usar `sudo npm install`

---

## ▶️ Ejecutar el proyecto

```bash
ng serve
```

La aplicación quedará disponible en:

```
http://localhost:4200
```

---



## 🛠️ Comandos útiles

Crear un componente:

```bash
ng generate component nombre-componente
```

Crear un servicio:

```bash
ng generate service services/nombre-servicio
```

Compilar para producción:

```bash
ng build
```

---

## ❗ Problemas comunes

### Error: Could not find '@angular/build:dev-server'

```bash
npm install
```

### Error de permisos npm (EACCES)

```bash
sudo chown -R $(whoami) ~/.npm
```

---

## 🧠 Recomendaciones

* Ejecutar siempre `npm install` después de clonar el proyecto
* Usar versiones LTS de Node.js
* No eliminar `package.json` ni `angular.json`
* No usar `sudo npm install`

---

## 👨‍💻 Autor

Juan Manuel Malaver

