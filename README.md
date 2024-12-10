# use-useless

A completely useless React hook that serves no practical purpose whatsoever.

## Installation

```bash
npm install use-useless
```

## Usage

```tsx
import { useUseless } from "use-useless";

function UselessComponent() {
  const {
    uselessCount,
    uselessMessage,
    doUselessThing,
    uselessBoolean,
    uselessObject,
  } = useUseless();

  return (
    <div>
      <p>Useless Count: {uselessCount}</p>
      <p>Useless Message: {uselessMessage}</p>
      <button onClick={doUselessThing}>Do Useless Thing</button>
      <p>Useless Boolean: {String(uselessBoolean)}</p>
      <p>Useless Object: {JSON.stringify(uselessObject)}</p>
    </div>
  );
}
```

## Features

- 🔢 `uselessCount`: A number that increments every second for no reason
- 💬 `uselessMessage`: A message that changes every 10 counts, but says basically the same thing
- 🎯 `doUselessThing()`: A function that logs to console and returns null
- ⚡ `uselessBoolean`: A random boolean that changes on every render
- 📦 `uselessObject`: An object containing meaningless data

## API Reference

### Returns

```typescript
{
  uselessCount: number;
  uselessMessage: string;
  doUselessThing: () => null;
  uselessBoolean: boolean;
  uselessObject: {
    why: string;
    what: string;
  }
}
```

## Why?

Why not? Sometimes you just need a package that does absolutely nothing useful. Perfect for:

- Teaching examples
- Testing package installations
- Filling space in your bundle
- Confusing your colleagues
- Adding complexity without value

## Contributing

Feel free to contribute more useless features! The only requirement is that they must serve no practical purpose.

## License

MIT © Jordi Enric
