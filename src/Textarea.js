import { useState } from "react";
import Marked from "./Marked";
import purify from "dompurify";

const Parsed = (props) => {
  const string = props.string;
  return (
    <div>
      <script type="text/javascript" src="src/purify.js"></script>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: purify.sanitize(string, { sanitize: true }),
        }}
      />
      `
    </div>
  );
};

const Textarea = () => {
  const markdownPreview = `
# This is a h1 Heading

## This is a h2 Sub Heading

This is a [link to my gitHub](https://github.com/bradleyaidanjohnson)

This is inline code: \`console.log("Hello World")\`

This is a code block:
\`\`\`
const a = 1
const b = 2
const c = a + b
console.log(c) // Expected output: 3
\`\`\`

These are list items with indented items:

1. OL item 1
   * UL Item 1.1
   * UL Item 1.2
   * UL Item 1.3
2. OL item 2
   * UL Item 2.1
   * UL Item 2.2
   * UL Item 2.3

This is a blockquote:
> I attribute my success to this - I never gave or took any excuse.

This is an image of meeeeeee:

![image of Bradley Aidan Johnson](https://avatars.githubusercontent.com/u/9921622?v=4)

This is **bolded text**
`;
  const [textBox, setTextBox] = useState(markdownPreview);

  const updateTextbox = (e) => {
    const userText = e.target.value;
    // Add formatting for a space between # and characters
    // const carriageFormatted = userText.replace(/[\n\n]/g, "  \n");
    setTextBox(userText);
  };

  return (
    <div>
      <textarea
        id="editor"
        onChange={(e) => updateTextbox(e)}
        value={textBox}
      />
      <Parsed string={Marked(textBox)} />
    </div>
  );
};

export default Textarea;
