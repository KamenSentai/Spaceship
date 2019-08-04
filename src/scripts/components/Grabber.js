/**
 * @author Alain Cao Van Tuong <contact@alain-caovantruong.fr>
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
    const RAD = Math.PI / 180

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
        rotate.y += movementX * Math.cos(rotate.x * RAD)
        rotate.z -= movementX * Math.sin(rotate.x * RAD) * Math.cos(rotate.y * RAD)

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
