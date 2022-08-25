/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require("tailwindcss/defaultConfig"),
    require("xtendui/tailwind.preset"),
  ],
  content: [
    "./public/index.html",
    "./src/views/Home/index.js",
    "./src/views/Home/Main/index.js",
    "./src/views/Home/Proyects/index.js",
    "./src/views/Home/Proyects/proyects.jsx",
    "./src/views/Home/Proyects/itemProyect.jsx",
    "./src/views/Home/Proyects/alert.jsx",
    "./src/views/Home/AboutMore/index.js",
    "./src/views/Home/Contact/index.js",
    "./src/views/Home/Contact/form.contact.jsx",
    "./src/views/Home/Contact/boxImg.contact.jsx",
    "./src/views/Home/Contact/boxForm.contact.jsx",
    "./src/views/Home/Contact/index.js",
    "./src/views/404/index.js",
    "./src/components/common/buttons.jsx",
    "./src/components/common/input.jsx",
    "./src/components/common/spin.jsx",
    "./src/components/common/alerts.jsx",
    "./src/components/layouts/navBar.jsx",
    "./src/components/layouts/footer.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
