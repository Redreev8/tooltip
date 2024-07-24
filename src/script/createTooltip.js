class Tooltip {
    _content = ''
    _placement = ''
    _element = null
    
    constructor({ content, element, placement, positionFlag, isAnimate = false, classList }) {
        this.classList = {
            ...this.ClassListDefult,
            ...classList
        }
        this.tooltip = document.createElement('div')
        this.element = element
        this.content = content
        this.positionFlag = positionFlag ?? 'center'
        this.placement = placement ?? 'top'
        this.animateEvent = isAnimate ? 'animationend' : 'transitionend'
    }

    get ClassListDefult() {
        return {
            tooltip: 'tooltip',
            active: 'tooltip--active',
            'top-center': 'tooltip--top',
            'top-start': 'tooltip--top-start',
            'top-end': 'tooltip--top-end',
            'left-center': 'tooltip--left',
            'left-start': 'tooltip--left-start',
            'left-end': 'tooltip--left-end',
            'right-center': 'tooltip--right',
            'right-start': 'tooltip--right-start',
            'right-end': 'tooltip--right-end',
            'bottom-center': 'tooltip--bottom',
            'bottom-start': 'tooltip--bottom-start',
            'bottom-end': 'tooltip--bottom-end',
        }
    }

    get content() {
        return this._content
    }

    set content(content) {
        this._content = content
        if (typeof content === 'string') {
            this.tooltip.textContent = content
            return
        }
        if (typeof content === 'function') {
            this.tooltip.textContent.append(content())
            return
        }
        this.tooltip.textContent.append(content)
    }

    get element() {
        return this._element
    }

    get getPlacements() {
        const widthToltip = this.tooltip.offsetWidth
        const heightToltip = this.tooltip.offsetHeight
        const elementWidth = this.element.offsetWidth
        const elementHeight = this.element.offsetHeight
        return {
            'top': () => this.tooltip.style.top = `${this.element.offsetTop - this.tooltip.offsetHeight - 12}px`,
            'horizont-start': () => this.tooltip.style.left = this.tooltip.style.left = `${this.element.offsetLeft}px`,
            'horizont-center': () => this.tooltip.style.left = `${this.element.offsetLeft + (elementWidth / 2) - (widthToltip / 2)}px`,
            'horizont-end': () => this.tooltip.style.left = `${this.element.offsetLeft + (elementWidth) - (widthToltip)}px`,
            'verticle-start': () => this.tooltip.style.top = `${this.element.offsetTop}px`,
            'verticle-center': () => this.tooltip.style.top = `${this.element.offsetTop + (elementHeight / 2) - (heightToltip / 2)}px`,
            'verticle-end': () => this.tooltip.style.top = `${this.element.offsetTop + (elementHeight) - heightToltip}px`,
            'left': () => this.tooltip.style.left = `${this.element.offsetLeft - widthToltip - 12}px`,
            'right': () => this.tooltip.style.left = `${this.element.offsetLeft + elementWidth + 12}px`,
            'bottom': () => this.tooltip.style.top = `${this.element.offsetTop + this.element.clientHeight + 12}px`,
        }
    }

    set element(element) {
        this._element = element
        this.tooltip.classList.add(this.classList.tooltip)
    }

    get placement() {
        return this._placement
    }

    set placement(placement) {
        this.tooltip.classList.remove(this.classList[this._placement])
        this.duruction = placement === 'top' || placement === 'bottom' ? 'horizont' : 'verticle'
        this._placement = placement
        this.tooltip.classList.add(this.classList[`${placement}-${this.positionFlag}`])
    }

    append() {
        if (!this.getPlacements[this.placement]) return
        console.log(`${this.duruction}-${this.positionFlag}`);
        document.body.prepend(this.tooltip)
        this.getPlacements[this.placement]()
        this.getPlacements[`${this.duruction}-${this.positionFlag}`]()
        this.tooltip.classList.add(this.classList.active)
    }

    remove = () => {
        if (this.tooltip.classList.contains(this.classList.active)) return
        this.tooltip.remove()
    }
    
    hide(isRemove = false) {
        this.tooltip.classList.remove(this.classList.active)
        if(isRemove) this.tooltip.addEventListener(this.animateEvent, this.remove)
    }
}

export default Tooltip