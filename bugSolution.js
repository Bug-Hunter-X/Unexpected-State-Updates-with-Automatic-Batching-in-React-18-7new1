```javascript
function MyComponent() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      default:
        return state;
    }
  }, 0);

  useEffect(() => {
    console.log('Component rendered');
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Click me</button>
    </div>
  );
}
```