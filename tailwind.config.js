const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          "100": "#FFFFCC",
          "200": "#FFFF99",
          "300": "#FFFF66",
          "400": "#FFFF3F",
          "500": "#FFFF00",
          "600": "#DBDB00",
          "700": "#B7B700",
          "800": "#939300",
          "900": "#7A7A00",
        },
        green: {
          "100": "#EBFDE3",
          "200": "#D3FCC8",
          "300": "#B4F8AB",
          "400": "#96F194",
          "500": "#71E879",
          "600": "#52C764",
          "700": "#38A754",
          "800": "#248645",
          "900": "#156F3B",
        },
        blue: {
          "100": "#CBFEFD",
          "200": "#98FAFE",
          "300": "#65EDFE",
          "400": "#3FDBFD",
          "500": "#00BDFC",
          "600": "#0093D8",
          "700": "#006EB5",
          "800": "#004E92",
          "900": "#003878",
        },
        purple: {
          "100": "#EAD6FD",
          "200": "#D3AFFC",
          "300": "#B785F7",
          "400": "#9D66F0",
          "500": "#7636E7",
          "600": "#5B27C6",
          "700": "#431BA6",
          "800": "#2E1185",
          "900": "#1F0A6E",
        },
        yellow: {
          "100": "#FEFDD2",
          "200": "#FDFBA6",
          "300": "#FAF67A",
          "400": "#F5F058",
          "500": "#EFE823",
          "600": "#CDC619",
          "700": "#ACA511",
          "800": "#8A840B",
          "900": "#726D06",
        },
        red: {
          "100": "#FFE8D8",
          "200": "#FFCBB1",
          "300": "#FFA88A",
          "400": "#FF876D",
          "500": "#FF503D",
          "600": "#DB2F2C",
          "700": "#B71E28",
          "800": "#931326",
          "900": "#7A0B24",
        },
      },
      fontFamily: {
        sans:
          '"Titillium Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif:
          '"Frank Ruhl Libre", Georgia, Cambria, "Times New Roman", Times, serif',
        mono:
          '"Fira Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [
    ({ addBase, config }) => {
      addBase({
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: config("theme.fontFamily.sans"),
        },
        h1: {
          fontSize: config("theme.fontSize.6xl"),
          fontWeight: config("theme.fontWeight.bold"),
          lineHeight: config("theme.lineHeight.none"),
          marginBottom: "1.25rem",
        },
        h2: {
          fontSize: config("theme.fontSize.5xl"),
          fontWeight: config("theme.fontWeight.bold"),
          lineHeight: config("theme.lineHeight.tight"),
          marginBottom: "1rem",
        },
        h3: {
          fontSize: config("theme.fontSize.4xl"),
          fontWeight: config("theme.fontWeight.bold"),
          lineHeight: config("theme.lineHeight.tight"),
          marginBottom: ".75rem",
        },
        h4: {
          fontSize: config("theme.fontSize.3xl"),
          fontWeight: config("theme.fontWeight.semibold"),
          lineHeight: config("theme.lineHeight.tight"),
          marginBottom: ".5rem",
        },
        h5: {
          fontSize: config("theme.fontSize.2xl"),
          fontWeight: config("theme.fontWeight.semibold"),
          lineHeight: config("theme.lineHeight.tight"),
          marginBottom: ".5rem",
        },
        h6: {
          fontSize: config("theme.fontSize.xl"),
          lineHeight: config("theme.lineHeight.tight"),
          marginBottom: ".5rem",
        },
        p: {
          fontSize: config("theme.fontSize.base"),
          lineHeight: config("theme.lineHeight.tight"),
          marginBottom: ".5rem",
        },
        vh: {
          fontSize: config("theme.fontSize.base"),
          lineHeight: config("theme.lineHeight.tight"),
          marginBottom: ".5rem",
        },
      });
    },
    // eslint-disable-next-line no-undef
    plugin(function({ addUtilities }) {
      let newUtilities = {};
      let vhHeighUtilities = {};
      let vhFontUtilities = {};
      for (let index = 10; index <= 100; index += 5) {
        vhHeighUtilities[`.h-${index}vh`] = { height: `${index}vh` };
      }
      for (let index = 1; index <= 20; index += 0.5) {
        const indexString = index % 1 === 0 ? index : `${Math.floor(index)}_5`;
        vhFontUtilities[`.text-${indexString}vh`] = {
          "font-size": `${index}vh`,
        };
      }
      newUtilities = { ...vhHeighUtilities, ...vhFontUtilities };

      console.log(newUtilities);

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    // eslint-disable-next-line global-require
    require("@tailwindcss/custom-forms"),
  ],
};
