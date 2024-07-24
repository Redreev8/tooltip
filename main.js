import './src/sass/style.sass'
import Tooltip from './src/script/createTooltip'

const element = document.querySelector('.tool')
const tooltips = []
const flagPositions = ['start', 'center', 'end']
const placements = ['top', 'left', 'right', 'bottom']
for (const placement of placements) {
    for (const position of flagPositions) {
        tooltips.push(new Tooltip({ 
            content: 'Tooltip content. Lorem ipsum dolor sit',
            element: element,
            placement: placement,
            positionFlag: position
        }))
    }
}

element.addEventListener('mouseenter', () => {
    tooltips.forEach(tooltip => tooltip.append())
})
element.addEventListener('mouseleave', () => {
    tooltips.forEach(tooltip => tooltip.hide(true))
})