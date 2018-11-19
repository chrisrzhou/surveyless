---
id: 3
text: Are you ready to learn more about supported question types and choice sets in surveyless!
questionType: SINGLE_CHOICE
choiceType: HORIZONTAL_BUTTON
choices: [Do I have a choice?, Hell yes!]
additionalComments: false
---

`surveyless` supports the following basic markdown use cases:

## Headings

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Newlines

---

## Bold, Italics, Strikethrough, Emojis

This is **bold**, _italics_, ~~strikethrough~~.

Emojis supported! 👨‍💻 / 🐈 / 🏞️🍜🍣

## Blockquotes

Regular blockquote:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

Nested blockquote:

> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue.
> Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.
>
> > Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor
> > odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.
> >
> > > Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue.
> > > Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.

## Lists

Unordered list:

- Lorem ipsum dolor sit amet

* Consectetur adipiscing elit

- Integer molestie lorem at massa

Ordered list:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Code and Syntax Highlighting

Inline `code` and syntax highlighting for various languages are supported:

```javascript
// javascript
const greet = person => {
  return `Hello ${person}!`;
};
```

```python
// python
def greet(person):
  return 'Hello ' + person + '!'
```

## Links

Autolink to https://github.com/chrisrzhou/surveyless works!

Inline links to [surveyless](https://github.com/chrisrzhou/surveyless) works!

> Note that all rendered markdown links in `surveyless` will open in new windows. This is by design.

## Images

External image resources works!
![Minion](http://octodex.github.com/images/minion.png)

Local image resources works!
![](/static/images/logo.png)

> Note that all images are responsively centered to the document. Please also specify local image resources using absolute filepaths beginning with "/static/". This is by design.

### Todo List

- [x] Checked item
- [ ] [Links supported](#qux)
- [ ] Unchecked item

## Tables

| Key     | Description            |
| ------- | ---------------------- |
| id      | survey id              |
| title   | title of survey        |
| choices | array of choice values |

## Iframes

Not usually a good idea, but you **can** embed youtube cat videos 😸

<iframe
  src="https://www.youtube.com/embed/SB-qEYVdvXA"
  height="400px"
  width="100%"
  frameborder="0">
</iframe>
