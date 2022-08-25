export const translateElement = (element, watch = true, direccion = 'Y', sense = '+') => {
    if (watch) {
        if (direccion === 'Y') element.style.transform = 'translateY(0%)'
        else element.style.transform = 'translateX(0%)'
        element.style.opacity = 100
    } else {
        if (direccion === 'Y') {
            if (sense === '+') element.style.transform = 'translateY(150%)'
            else element.style.transform = 'translateY(-150%)'
        } else {
            if (sense === '+') element.style.transform = 'translateX(150%)'
            else element.style.transform = 'translateX(-150%)'
        }
        element.style.opacity = 0
    }
}

export const scaleElement = (element, watch = true) => {
    if (watch) {
        element.style.transform = 'scale(1)'
        element.style.opacity = 100
    }
    else {
        element.style.transform = 'scale(1.2)'
        element.style.opacity = 0
    }
}