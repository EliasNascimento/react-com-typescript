import React from "react";

interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];

  // 8 - Enum
  category: Category;
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

const Destructuring = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>Título: {title}</h2>
      <p>Conteúdo: {content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        Tags:{" "}
        {tags.map((tag) => (
          <span> #{tag}</span>
        ))}
      </div>
      <p>Categoria: {category}</p>
    </div>
  );
};

export default Destructuring;
