**Loop Main**

```js
<div className="flexBox">
  <div className="background">
    <Loader kind="loop" format="main" color="brand" />
    <Loader kind="loop" format="main" color="inverse" />
  </div>
</div>
```

**Loop Inline**

```js
<div className="flexBox">
  <div className="background">
    <Loader kind="loop" format="inline" color="brand" />
    <Loader kind="loop" format="inline" color="info" />
    <Loader kind="loop" format="inline" color="critical" />
    <Loader kind="loop" format="inline" color="inverse" />
  </div>
</div>
```

**Dots Inline**

```js
<div className="flexBox">
  <div className="background">
    <Loader kind="dots" format="inline" color="brand" />
    <Loader kind="dots" format="inline" color="info" />
    <Loader kind="dots" format="inline" color="critical" />
    <Loader kind="dots" format="inline" color="inverse" />
  </div>
</div>
```

**Skeleton**

```js
<div className="flexBox">
  <div className="background">
    <Loader kind="skeleton" format="circle" color="inverse" />
    <Loader kind="skeleton" format="text" color="inverse" />
    <Loader kind="skeleton" format="square" color="inverse" />
  </div>
</div>
```

<style>
  .flexBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .background {
    display: flex;
    align-items: center;   
    gap: 1rem;
    padding: 1rem;
    background: var(--color-page-subtle, #F2F4F8);
  }
</style>
