/**
 * @author Alain Cao Van Tuong <contact@alaincaovantruong.com>
 */

/* Definition */

/**
 * @class Grabber
 */
class Grabber {
  /**
   * Construct
   * @param {String} element
   */
  constructor(element) {
    this.element = document.querySelector(element)
    this.isGrabbing = false
    this.scale = {
      g: 1,
    }
    this.rotate = {
      x: 0,
      y: 0,
      z: 0,
    }
  }

  /**
   * Initialiaze
   */
  init() {
    const { scale, rotate } = this
    const RADIAN = 180 / Math.PI

    window.addEventListener('wheel', (event) => {
      const { deltaY } = event

      scale.g = Math.max(0.01, Math.min(5, scale.g + deltaY / 1000))

      this.update()
    })

    window.addEventListener('mousedown', () => {
      this.isGrabbing = true
      document.body.classList.add('isGrabbing')
    })

    window.addEventListener('mouseup', () => {
      this.isGrabbing = false
      document.body.classList.remove('isGrabbing')
    })

    window.addEventListener('mousemove', (event) => {
      if (this.isGrabbing) {
        const { movementX, movementY } = event

        rotate.x -= movementY
        rotate.y += movementX * Math.cos(rotate.x / RADIAN)
        rotate.z -= movementX * Math.sin(rotate.x / RADIAN) * Math.cos(rotate.y / RADIAN)

        this.update()
      }
    })
  }

  /**
   * Update transform
   */
  update() {
    const { element, scale, rotate } = this

    element.style.transform = `
      scale(${scale.g})
      rotateX(${rotate.x}deg)
      rotateY(${rotate.y}deg)
      rotateZ(${rotate.z}deg)
    `
  }
}

/* Export */

export default Grabber
