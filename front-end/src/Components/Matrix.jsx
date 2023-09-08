import React, { useEffect } from 'react';

const MatrixRainBackground = () => {
  useEffect(() => {
    // geting canvas by Boujjou Achraf
    const c = document.getElementById("c");
    const ctx = c.getContext("2d");

    // making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    // chinese characters - taken from the unicode charset
    let matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    // converting the string into an array of single characters
    matrix = matrix.split("");

    const font_size = 10;
    const columns = c.width / font_size; // number of columns for the rain
    // an array of drops - one per column
    const drops = [];
    // x below is the x coordinate
    // 1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // drawing the characters
    const draw = () => {
      // Black BG for the canvas
      // translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#00ff00"; // green text
      ctx.font = font_size + "px arial";
      // looping over drops
      for (let i = 0; i < drops.length; i++) {
        // a random Chinese character to print
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        // x = i * font_size, y = value of drops[i] * font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        // sending the drop back to the top randomly after it has crossed the screen
        // adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // incrementing Y coordinate
        drops[i]++;
      }
    };

    const animationInterval = setInterval(draw, 35);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <canvas
      id="c"
      style={{ background: 'black', display: 'block' }}
    ></canvas>
  );
};

export default MatrixRainBackground;
