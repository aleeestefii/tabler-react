```jsx
import { Button, Form } from "tabler-react";

<Form.InputGroup
  append={
    <Button as="a" color="primary" href="http://www.google.com">
      Go!
    </Button>
  }
>
  <Form.Input placeholder="Search for..." />
</Form.InputGroup>;
```

```jsx
import { Button, Form } from "tabler-react";

<Form.InputGroup
  inputProps={{ placeholder: "Search for..." }}
  append={
    <Button as="a" color="primary" href="http://www.google.com">
      Go!
    </Button>
  }
/>;
```
