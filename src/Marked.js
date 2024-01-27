import { marked } from "marked";

const Marked = (string) => {
  marked.use({
    breaks: true,
  });

  return marked.parse(string);
};

export default Marked;
