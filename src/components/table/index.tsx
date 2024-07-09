import tw from "twin.macro"
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export type TableColumns<T> = {
  title?: string;
  key: string;
  render: (data: T, index: number) => JSX.Element;
}

export type TableProps<T = any> = {
  columns: TableColumns<T>[];
  data: T[];
}

const TableHead = styled.th<{ isGray: boolean }>(
  ({ isGray }) => css`
    ${tw`relative py-2 text-left text-base font-bold uppercase`}
    ${isGray ? tw`text-black-900/50` : tw`text-black-900`}
  `
);


export default function Table() {
  return (
    <div>Table</div>
  )
}
