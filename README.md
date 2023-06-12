# Inkweaver

![image](https://github.com/ricedust/p5-inkweaver/assets/62413269/e94055cc-40a4-4177-8ef4-15a8419cc1a0)

Inkweaver is a generative art tool for creating spontaneous line art. By adjusting the brush properties, you can create anything from methodical, textured doodles to freeflowing, sporadic lineography.

## How To Use

### [Click here to start drawing in your browser.](http://ricedust.com/p5-inkweaver/)

Use the mouse to draw on the canvas. Create up to 27 unique brushes by combining multiple line settings.

| Hotkey | Function |
| --- | --- |
| X	| Clear canvas and reset settings |
| 1, 2, 3	| Set line speed |
| Q, W, E	| Set line smoothness |
| A, S, D	| Set line opacity |
| Arrow Keys | Set flow direction |
| Z	| Toggle whether lines wrap around the canvas |
| F	| Toggle line fading |
| C	| Toggle line eraser |
| R	| Reset Settings |

## How It Works

Lines are drawn by particles that leave a trail as they move across the screen. As the mouse is dragged, more particles are added to the canvas. In order to push particles around, the canvas applies a force to the particle. The direction of this force is determined by a flow field generated using Perlin Noise.
