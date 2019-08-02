/**
 * @author Alain Cao Van Tuong <contact@alain-caovantruong.fr>
 */

/**
 * @class Space
 */
class Space {
  constructor() {
    this.canvas = document.querySelector('canvas')
    this.context = this.canvas.getContext('2d')
    this.position = {
      x: 0,
      y: 0,
    }
  }

  init() {
    this.resizeCanvas()
    this.mouseMove()
    this.drawSpace()
  }

  resizeCanvas() {
    const { canvas } = this

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    window.addEventListener('resize', resize)
  }

  mouseMove() {
    const { canvas } = this

    const move = (event) => {
      const { clientX, clientY } = event

      this.position = {
        x: clientX - canvas.width / 2,
        y: clientY - canvas.height / 2,
      }
    }

    window.addEventListener('mousemove', move)
  }

  drawSpace() {
    const { canvas, context } = this

    const NUMBER_STARS = 100
    const TAU = Math.PI * 2
    const DEPTH = ((canvas.width + canvas.height) / 2) / 100
    const REDUCER = 1000

    const stars = []

    for (let i = 0; i < NUMBER_STARS; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * DEPTH
      })
    }

    context.fillStyle = 'white'

    const mod = (n, m) => ((n % m) + m) % m

    const loop = () => {
      const { width, height } = canvas
      const { position } = this

      context.clearRect(0, 0, width, height)

      stars.forEach(star => {
        const { x, y, z } = star

        context.beginPath()
        context.arc(star.x, star.y, 1, 0, TAU, false)
        context.fill()
        context.closePath()

        star.x = mod(x - position.x * (DEPTH  - z) / REDUCER, width)
        star.y = mod(y - position.y * (DEPTH  - z) / REDUCER, width)
      })

      window.requestAnimationFrame(loop)
    }
    loop()
  }
}

export default Space
