import * as React from "react";

import { storiesOf } from "@storybook/react";

import Table from ".";
import examples from "./Table.examples.md";
import { Button } from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Table/Table", module);

stories.add(
  "Example",
  () => {
    return (
      <Table>
        <Table.Header>
          <Table.ColHeader>ID</Table.ColHeader>
          <Table.ColHeader>Name</Table.ColHeader>
          <Table.ColHeader>Action</Table.ColHeader>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Col>1</Table.Col>
            <Table.Col>Jon</Table.Col>
            <Table.Col>
              <Button color="primary">Edit</Button>
            </Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  },
  {
    notes: { markdown: examples },
  }
);
