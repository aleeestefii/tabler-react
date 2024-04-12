import * as React from "react";

import Grid from "../Grid";
import Card from "../Card";
import Container from "../Container";

type Props = {
  children?: React.ReactNode;
  title?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  RootComponent?: React.ElementType;
};

function PageCard({ children, title, header, footer, RootComponent }: Props) {
  return (
    <div className="my-3 my-md-5">
      <Container>
        <Grid.Row>
          <Grid.Col width={12}>
            <Card RootComponent={RootComponent}>
              {title && (
                <Card.Header>
                  <Card.Title>{title}</Card.Title>
                </Card.Header>
              )}
              {header}
              <Card.Body>{children}</Card.Body>
              {footer}
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Container>
    </div>
  );
}



export default PageCard;
