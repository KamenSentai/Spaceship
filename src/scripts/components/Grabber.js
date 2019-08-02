/**
 * @author Alain Cao Van Tuong <contact@alain-caovantruong.fr>
 */

/**
 * @class Grabber
 */

class Grabber {
  constructor() {
    this.isGrabbing = false
  }

  init() {
    const starship = document.querySelector('.starship')

    const rotate = {
      x: 0,
      y: 0,
    }

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
        rotate.y += movementX

        starship.style.transform = `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
      }
    })
  }
}

export default Grabber
