export function addNumber(number) {
    return {
        type: "ADD",
        payload: number
    };
}

export function subtractNumber(number) {
    return {
        type: "SUBTRACT",
        payload: number
    };
}