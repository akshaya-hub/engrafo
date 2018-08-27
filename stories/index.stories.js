/* eslint-disable no-console, react/button-has-type */

import { document } from "global";
import { storiesOf } from "@storybook/html";

import * as snapshots from "../tests/__snapshots__/integration.test.js.snap";
import "../src/assets/css/index.scss";
import main from "../src/assets/javascript/main";

function createStory(snapshotName) {
  return () => {
    const container = document.createElement("div");
    let html = snapshots[snapshotName];
    // Jest puts strings inside a quote inside the snapshot. Good grief.
    // First, remove starting and end quote
    html = html
      .trim()
      .replace(/^"/, "")
      .replace(/"$/, "");
    // Then remove all the backslashed quotes
    html = html.replace(/\\"/g, '"');
    container.innerHTML = html;
    main(container);
    return container;
  };
}

storiesOf("Basic functionality")
  .add("Citations", createStory("citations.tex 1"))
  .add("Figures", createStory("figures.tex 1"))
  .add("Footnotes", createStory("footnotes.tex 1"))
  .add("Headings", createStory("headings.tex 1"))
  .add("Lists", createStory("lists.tex 1"))
  .add("Math", createStory("math.tex 1"))
  .add("Paragraph styles", createStory("paragraph.tex 1"))
  .add("Tables", createStory("tables.tex 1"))
  .add("Text styles", createStory("text.tex 1"))
  .add("URLs", createStory("urls.tex 1"));

storiesOf("Packages", module)
  .add("aa", createStory("aa.tex 1"))
  .add("acronym.sty", createStory("acronym.sty.tex 1"))
  .add("algorithm2e", createStory("algorithm.tex 1"))
  .add("listings", createStory("listings.tex 1"));

storiesOf("Complete documents")
  .add("sample2e", createStory("sample2e.tex 1"))
  .add("small2e", createStory("small2e.tex 1"));