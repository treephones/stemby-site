export const particlesInit = (main) => {
};

export const particlesLoaded = (container) => {
};

export const options = {
    background: {
      color: {
      },
    },
    fpsLimit: 40,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.1,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.6,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#15bbb4",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 900,
        },
        value: 40,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: "square",
      },
      size: {
        random: true,
        value: 2,
      },
    },
    detectRetina: true,
  }