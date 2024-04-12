import React from "react";
import cn from "classnames";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow, { TableRowProps } from "./TableRow";
import TableCol, { TableColProps } from "./TableCol";
import TableColHeader, { TableColHeaderProps } from "./TableColHeader";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

interface RowItem extends TableRowProps {
  key: string | number;
  item: BodyItem[];
}
interface BodyItem extends Omit<TableColProps, "content"> {
  content?: React.ReactNode;
  className?: string;
}

interface HeaderItem extends Omit<TableColHeaderProps, "content"> {
  content?: React.ReactNode;
}

export type TablerProps<
  As extends React.ElementType = "table"
> = TablerComponentProps<
  As,
  {
    /**
     * Should this Table be optimized to contain Cards
     */
    cards?: boolean;
    /**
     * Give the table striped rows
     */
    striped?: boolean;
    /**
     * Make the table responsive
     */
    responsive?: boolean;
    highlightRowOnHover?: boolean;
    hasOutline?: boolean;
    verticalAlign?: "center";
    headerItems?: HeaderItem[];
    bodyItems?: Array<RowItem>;
  }
>;
export interface TableProps extends TablerComponentProps {
  /**
   * Should this Table be optimized to contain Cards
   */
  cards?: boolean;
  /**
   * Give the table striped rows
   */
  striped?: boolean;
  /**
   * Make the table responsive
   */
  responsive?: boolean;
  highlightRowOnHover?: boolean;
  hasOutline?: boolean;
  verticalAlign?: "center";
  headerItems?: HeaderItem[];
  bodyItems?: Array<RowItem>;
}

function Table({
  className,
  children,
  cards,
  striped,
  responsive,
  highlightRowOnHover,
  hasOutline,
  verticalAlign,
  headerItems,
  bodyItems,
  ...props
}: TableProps) {
  const classes = cn(
    "table",
    {
      "card-table": cards,
      "table-striped": striped,
      "table-hover": highlightRowOnHover,
      "table-outline": hasOutline,
      "table-vcenter": verticalAlign === "center",
    },
    className
  );

  const header = headerItems && (
    <Table.Header>
      <Table.Row>
        {headerItems.map(({ content, ...item }, i) => (
          <Table.ColHeader key={i} {...item}>
            {content}
          </Table.ColHeader>
        ))}
      </Table.Row>
    </Table.Header>
  );

  const body = bodyItems && (
    <Table.Body>
      {bodyItems.map((row, i) => (
        <Table.Row {...row}>
          {row.item.map(({ content, ...col }, i) => (
            <Table.Col key={i} {...col}>
              {content}
            </Table.Col>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  );

  const table = (
    <El.Table className={classes} {...props}>
      {header}
      {body || children}
    </El.Table>
  );

  return !responsive ? table : <div className="table-responsive">{table}</div>;
}

Table.defaultProps = {
  cards: false,
  striped: false,
  responsive: false,
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Col = TableCol;
Table.ColHeader = TableColHeader;

/** @component */
export default Table;
