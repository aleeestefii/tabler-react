### Row gutters

```jsx
import { Grid } from 'tabler-react';

<Grid.Row g="sm">
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >A</div>
  </Grid.Col>
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >B</div>
  </Grid.Col>
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >C</div>
  </Grid.Col>
</Grid.Row>

<Grid.Row g="sm">
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >A</div>
  </Grid.Col>
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >B</div>
  </Grid.Col>
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >C</div>
  </Grid.Col>
</Grid.Row>
<Grid.Row g="md">
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >A</div>
  </Grid.Col>
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >B</div>
  </Grid.Col>
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >C</div>
  </Grid.Col>
</Grid.Row>
<Grid.Row g="lg">
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >A</div>
  </Grid.Col>
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >B</div>
  </Grid.Col>
  <Grid.Col>
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px grey solid",
      }}
    >C</div>
  </Grid.Col>
</Grid.Row>
```

### Rows of Cards

```jsx
import { Grid, Card } from 'tabler-react';

<Grid.Row cards>
  <Grid.Col>
    <Card title="Title" body="A" />
  </Grid.Col>
  <Grid.Col>
    <Card
      title="Title"
      body={`orem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  deleniti fugit incidunt.`}
    />
  </Grid.Col>
  <Grid.Col>
    <Card title="Title" body="C" />
  </Grid.Col>
</Grid.Row>
<Grid.Row cards deck>
  <Grid.Col>
    <Card title="Title" body="A" />
  </Grid.Col>
  <Grid.Col>
    <Card
      title="Title"
      body={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    deleniti fugit incidunt.`}
    />
  </Grid.Col>
  <Grid.Col>
    <Card title="Title" body="C" />
  </Grid.Col>
</Grid.Row>
```

### Row Alignment

```jsx
import { Grid, Card } from "tabler-react";

<Grid.Row cards alignItems="center">
  <Grid.Col>
    <Card title="Title" body="A" />
  </Grid.Col>
  <Grid.Col>
    <Card
      title="Title"
      body={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  deleniti fugit incidunt.`}
    />
  </Grid.Col>
  <Grid.Col>
    <Card title="Title" body="C" />
  </Grid.Col>
</Grid.Row>;
```
