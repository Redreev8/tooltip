# Toltip

## Props
```
- content: string | HTMLElement | () => HTMLElement, 
- element: HTMLElement, 
- positionFlag: 'start' | 'center' | 'end', 
- isAnimate: boolean 
- placement: 'top' | 'left' | 'right' | 'bottom'
- classLis: {
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
```

## Metods
```
- append(): inserts into box
- hide(): hides the tooltip, 
    - props **isRemove** if there are true then it tooltip be deleted after the animations
- remove(isRemove: boolean): remove from HTMLDom
```
