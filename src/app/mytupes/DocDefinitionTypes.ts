interface TextObject {
  text: string;
  bold?: true;
  fontSize?: number;
  margin?: [number, number, number, number];
  alignment?: "left" | "center" | "right" | "justify";
}

export interface DocDefinitionTypes {
  content: {
    text: string | TextObject[];
    fontSize?: number;
    alignment?: "left" | "center" | "right" | "justify";
    margin?: [number, number, number, number];
    color?: string;
    link?: string;
    style?: string;
  }[];
}
