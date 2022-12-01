// Små funktioner som hjälper till

function numberWithSpaces(number) {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export { numberWithSpaces }