/**
 * @author Alain Cao Van Tuong <contact@alain-caovantruong.fr>
 */

/**
 * @class Grabber
 */

class Grabber {
  constructor(element) {
    this.element = document.querySelector(element)
    this.isGrabbing = false
    this.rotate = {
      x: 0,
      y: 0,
      z: 0,
    }
  }

  init() {
    const { element, rotate } = this

    const RAD = Math.PI / 180

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

        element.style.transform = `
          rotateX(${rotate.x}deg)
          rotateY(${rotate.y}deg)
          rotateZ(${rotate.z}deg)
        `
      }
    })
  }
}

export default Grabber
