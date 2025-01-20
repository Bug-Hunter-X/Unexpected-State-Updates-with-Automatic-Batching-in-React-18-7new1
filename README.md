# React 18 Automatic Batching Bug

This repository demonstrates a potential issue with React 18's automatic batching of state updates.  The bug occurs because of the unexpected way multiple state updates within a single event handler are processed, causing counter to increment unexpectedly.

## Bug Description
The `MyComponent` in `bug.js` uses `useState` to manage a counter.  The `useEffect` hook logs a message on every render.  You might expect the message to be logged multiple times if `setCount` is called multiple times inside the `onClick` handler. However, due to automatic batching, the UI only updates once with the final state change, showing unexpected counter values.

## Solution
The solution in `bugSolution.js` demonstrates how to work around this behavior using `useReducer` instead of `useState`.