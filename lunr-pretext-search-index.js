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
  "id": "sec-worksheets",
  "level": "1",
  "url": "sec-worksheets.html",
  "type": "Section",
  "number": "1.2",
  "title": "Some worksheets",
  "body": " Some worksheets   Practicing Writing Proofs     Prove the theorem If is an odd integer and is an odd integer, then is an odd integer.       Prove the theorem For every integer , is odd if and only if is even. (Recall that this requires proving two separate implications. Identify them before writing your proofs!)      Another type of theorem that we are sometimes called upon to prove is a uniqueness theorem . uniqueness theorem  theorem uniqueness In such a case, we must prove that the thing in question exists as well as prove that there is only one such thing. The next activity walks you through the structure of such an argument.    We want to prove the theorem If such that and , then there exists a unique such that .    The first step in a uniqueness proof is to demonstrate that such a beast exists. One pattern for doing this is by coming up with a formula for the thing (here ) that we need to have exist and showing that does what it's supposed to. The process of how you come with the is scratchwork that doesn't go in the proof! . Thus, we want to start by finding a formula for so that . Use familiar algebra skills to do it. What you write up for your proof is going to look like Let . Now substituting and simplifying, we see: starting with and simplifying to get .    Next, we have to show that our is unique. To do so, you assume that both have the property required. Namely, that and . Now you use algebra to show that , which means that the you came up with originally really is unique.    What you have above likely has a lot of scratchwork in it. Rewrite things neatly to have a nice paragraph that proves the theorem.        Pick and choose amongst the following for more practice.   If is even, then is even.  If and are even, then is even. (What do you notice about your proof?)  Prove or disprove: If is odd, then there exists an integer such that . (If you decide the statement is true and prove it, can you prove that is unique?)  For every integer , if is an odd integer, then is an odd integer.     "
},
{
  "id": "sec-worksheets-2-2-1",
  "level": "2",
  "url": "sec-worksheets.html#sec-worksheets-2-2-1",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  Prove the theorem If is an odd integer and is an odd integer, then is an odd integer.    "
},
{
  "id": "sec-worksheets-2-2-2",
  "level": "2",
  "url": "sec-worksheets.html#sec-worksheets-2-2-2",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  Prove the theorem For every integer , is odd if and only if is even. (Recall that this requires proving two separate implications. Identify them before writing your proofs!)   "
},
{
  "id": "sec-worksheets-2-3-1",
  "level": "2",
  "url": "sec-worksheets.html#sec-worksheets-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniqueness theorem "
},
{
  "id": "sec-worksheets-2-3-2",
  "level": "2",
  "url": "sec-worksheets.html#sec-worksheets-2-3-2",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": "  We want to prove the theorem If such that and , then there exists a unique such that .    The first step in a uniqueness proof is to demonstrate that such a beast exists. One pattern for doing this is by coming up with a formula for the thing (here ) that we need to have exist and showing that does what it's supposed to. The process of how you come with the is scratchwork that doesn't go in the proof! . Thus, we want to start by finding a formula for so that . Use familiar algebra skills to do it. What you write up for your proof is going to look like Let . Now substituting and simplifying, we see: starting with and simplifying to get .    Next, we have to show that our is unique. To do so, you assume that both have the property required. Namely, that and . Now you use algebra to show that , which means that the you came up with originally really is unique.    What you have above likely has a lot of scratchwork in it. Rewrite things neatly to have a nice paragraph that proves the theorem.   "
},
{
  "id": "sec-worksheets-2-4-1",
  "level": "2",
  "url": "sec-worksheets.html#sec-worksheets-2-4-1",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "  Pick and choose amongst the following for more practice.   If is even, then is even.  If and are even, then is even. (What do you notice about your proof?)  Prove or disprove: If is odd, then there exists an integer such that . (If you decide the statement is true and prove it, can you prove that is unique?)  For every integer , if is an odd integer, then is an odd integer.  "
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
