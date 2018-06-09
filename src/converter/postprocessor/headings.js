let toTitleCase = require("titlecase");

module.exports = function(dom) {
  // Things to apply to all headings
  let headings = dom.querySelectorAll("h1, h2, h3, h4, h5, h6");
  Array.from(headings).forEach(heading => {
    var textNodes = dom.createTreeWalker(
      heading,
      dom.defaultView.NodeFilter.SHOW_TEXT
    );
    while (textNodes.nextNode()) {
      let node = textNodes.currentNode;
      // UPPER CASE HEADING ARGH
      // FIXME: this will be a false positive if it's just an acronym in a tag
      if (node.nodeValue == node.nodeValue.toUpperCase()) {
        node.nodeValue = toTitleCase(node.nodeValue.toLowerCase());
      }

      // Clean up weird characters
      node.nodeValue = node.nodeValue.replace("\u3000", "");
    }
  });
};
