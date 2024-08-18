const canvasSketch = require('canvas-sketch');

// Define canvas settings
const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {

    // Set up the canvas
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    // Define grid parameters
    const w = width * 0.10; // Width of each cell
    const h = height * 0.10; // Height of each cell
    const gap = width * 0.03; // Gap between cells
    const ix = width * 0.17; // Initial x position
    const iy = height * 0.17; // Initial y position

    const off = width * 0.02; // Offset for inner rectangles

    let x, y;

    // Nested loops to create 5x5 grid
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // Calculate positions for each cell
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        // Draw outer rectangle
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        // Randomly draw inner rectangle in some cells
        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
