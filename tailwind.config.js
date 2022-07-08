module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2BD9AF",
        secondary: "#FF5E84",
        btnPrimary: "#2BD9AF",
        btnSecondary: "#00ffff",
        danger_red: "#E1273D",
        danger_glow: "#ED9AA4",
        danger_disabled: "#F9D4D8",

        btn_primary_normal: "#EB8120",
        btn_primary_hover: "#F17502",
        btn_primary_active: "#D16400",
        btn_primary_disabled: "#F7CDA6",
        btn_outlined_hover: "#F7CDA6",
        btn_outlined_active: "#EBB888",
        btn_outlined_disabled: "#ffffff",

        text_main: "#001948",
        text_active: "#7C89A1",
        text_inactive: "#C6CBD5",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        normal: "0px 0px 30px rgba(0, 25, 72, 0.15)",
        hover: "0px 10px 40px rgba(0, 25, 72, 0.25)",
        active: " 0px 5px 30px rgba(0, 25, 72, 0.25)",
        btn_hover: "0px 4px 6px rgba(1, 5, 93, 0.15)",
        card: "0px 2px 14px rgba(0, 0, 0, 0.15)",
      },
      padding: {
        text_input: "16px 12px 8px 12px",
      },
    },
  },
  plugins: [],
};
