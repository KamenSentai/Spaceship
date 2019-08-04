/**
 * @author Alain Cao Van Tuong <contact@alain-caovantruong.fr>
 */

/* Definition */

/**
 * @class Laser
 */
class Laser {
  constructor() {
    this.laser = document.querySelector('.laser')
    this.state = 'isShot'
    this.isShooting = false
  }

  init() {
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 32 && !this.isShooting) {
        const clone = this.laser.cloneNode(true)
        this.isShooting = true
        this.laser.classList.add(this.state)
        this.laser.parentElement.appendChild(clone)

        setTimeout(() => {
          this.laser.parentElement.removeChild(this.laser)
          this.laser = clone
          this.isShooting = false
        }, 500)
      }
    })
  }
}

/* Export */

export default Laser
