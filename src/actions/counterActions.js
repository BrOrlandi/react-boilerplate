export const incrementCounter = (counter) => ({
    type: 'INCREMENT_COUNTER',
    counter
});

export const decrementCounter = (counter) => ({
    type: 'DECREMENT_COUNTER',
    counter
});

export const resetCounter = () => ({
   type: 'RESET_COUNTER'
});