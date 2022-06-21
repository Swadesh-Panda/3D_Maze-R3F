export default class Input{
    constructor()
    {

        // Setup
        this.keys = {

            forward: false,
            backward: false,

            left: false,
            right: false,

            space: false,
            shift: false,

            leftMouse: false,
            rightMouse: false,
        }

        document.addEventListener('mouseup', (e) => this.onMouseUp(e))
        document.addEventListener('mousedown', (e) => this.onMouseDown(e))
        document.addEventListener('keydown', (e) => this.onKeyDown(e) )
        document.addEventListener('keyup', (e) => this.onKeyUp(e) )
    }

    onMouseDown(event) {

        switch ( event.button ) {

            case 0:
                this.keys.leftMouse = true
                break
            case 2:
                this.keys.rightMouse = true
                break
        }


    }
        
    onMouseUp(event) {

        switch ( event.button ) {

            case 0:
                this.keys.leftMouse = false
                break
            case 2:
                this.keys.rightMouse = false
                break
        }

    }
    
    onKeyDown(event) {

        switch ( event.code ) {

            case 'ArrowUp':
            case 'KeyW':
                this.keys.forward = true
                break

            case 'ArrowDown':
            case 'KeyS':
                this.keys.backward = true
                break

            case 'ArrowLeft':
            case 'KeyA':
                this.keys.left = true
                break

            case 'ArrowRight':
            case 'KeyD':
                this.keys.right = true
                break
                
            case 'Space':
                this.keys.space = true
                break
                
            case 'ShiftLeft':
                this.keys.shift = true
                break
        }

    }
    
    onKeyUp(event) {

        switch ( event.code ) {

            case 'ArrowUp':
            case 'KeyW':
                this.keys.forward = false
                break

            case 'ArrowDown':
            case 'KeyS':
                this.keys.backward = false
                break

            case 'ArrowLeft':
            case 'KeyA':
                this.keys.left = false
                break

            case 'ArrowRight':
            case 'KeyD':
                this.keys.right = false
                break
                
            case 'Space':
                this.keys.space = false
                break
                
            case 'ShiftLeft':
                this.keys.shift = false
                break
        }

    }
}