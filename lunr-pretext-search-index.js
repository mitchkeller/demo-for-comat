var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Does <code class=\"code-inline tex2jax_ignore\">latex-image<\/code> work?",
  "body": " Does latex-image work?  Let us see if latex-image will work here.   Electronics Diagram generated with Tikz code   A pile of electronic components wired together      Polynomial approximations of generated from SageMath code      "
},
{
  "id": "figure-tikz-electronics",
  "level": "2",
  "url": "sec-section-name.html#figure-tikz-electronics",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Electronics Diagram generated with Tikz code   A pile of electronic components wired together    "
},
{
  "id": "figure-sage-polynomial-approximation",
  "level": "2",
  "url": "sec-section-name.html#figure-sage-polynomial-approximation",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Polynomial approximations of generated from SageMath code     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
