import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Markdown from "marked-react";

const Textarea = () => {
  const markdownPreview =
    "#This is a h1 Heading &#10; ##This is a h2 Sub Heading &#10;a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.";
  const [textBox, setTextBox] = useState(markdownPreview);
  const updateTextbox = (e) => {
    const userText = e.target.value;
    setTextBox(e.target.value);
  };

  return (
    <div>
      <textarea
        id="editor"
        onChange={(e) => updateTextbox(e)}
        placeholder="#This is a h1 Heading &#10; ##This is a h2 Sub Heading &#10;"
      />
      <div id="preview">
        <Markdown>{textBox}</Markdown>
      </div>
    </div>
  );
};

export default Textarea;
