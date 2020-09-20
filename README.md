# Why react

- Library, not framework - small, not complete (decision, flexible)
- React is declarative. HTML is also declarative, but for static pages. The developer writes what to show, but not how to show it. 
**Imperative programming** is a paradigm of computer programming in which the *program describes a sequence of steps* that change the state of the computer.
**Declarative programming** is a computer programming paradigm that the developer *defines what the program should accomplish* rather than explicitly defining how it should go about doing so
- Viritual DOM
- Just javascript
- React Native
- Facebook battle-tests it

jscomplete.com/whyreact

# React Basic Components

**Component:** 

- Input: props or state
- Output: UI
- Like functions
- Private state
- Reusable and composable

**Reactive updates:** 

- When the input changes the output changes. This must be reflected in the DOM. React takes care of this

**Viritual views in memory:**

We don't write HTM. We use Javascript to generate it. 

When you get only data from server, you have two choises for doing more with that data than just html. You could enhance HTML with new things (Angular etc.). Or you could use javascript to genereate html from the data (React). 

No HTML template.

Thus, React can have a virtual representation of the DOM in memory. Because it generates the views based on js, thus in memory. (Tree reconciliation) 

React compare versions of the DOM in memory before updating the browser. 

# JSX 

React Components are not written in HTML, or JS. It's written in JSX. Which is then compiled to React API calls. One such compiler is Babel. 

```
<div>Hello World</div>
```
is compiled to 
```
React.createElement("div", null, "Hello World");
```
So you write something that looks like HTML, and Babel is compiling it to React API calls.