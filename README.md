# Why react

- Library, not framework - small, not complete (decision, flexible)
- React is declarative. HTML is also declarative, but for static pages. The developer writes what to show, but not how to show it. (See below)
- Viritual DOM
- Just javascript
- React Native
- Facebook battle-tests it

**Imperative programming** 
is a paradigm of computer programming in which the *program describes a sequence of steps* that change the state of the computer.

**Declarative programming** 
is a computer programming paradigm that the developer *defines what the program should accomplish* rather than explicitly defining how it should go about doing so.

**Just javascript**
Whith server-side rendering, you have two choises for doing more with data than just HTML. You could enhance HTML with new concepts (Angular etc.). Or you could use javascript to genereate HTML from the data (React). 

With React we write HTML. We use Javascript to generate it. No HTML templates. 

jscomplete.com/whyreact


# React Basic Components

**Component:** 

- Input: props or state
- Output: UI
- Like functions
- Private state
- Reusable and composable

Functions and classes can both have state and side effects, or be purely representatable. 
It's Recomended to use Functions, but classes are more powerful


**Viritual views in memory:**

Since HTML-views are generated from JavaScript, React can have a virtual representation of the DOM in memory. (Tree reconciliation) 

When there are changes in state React can update the viritual DOM to reflect that. This is much faster than updating the real DOM. 


**Reactive updates:** 

When the input changes, the output changes. This must be reflected in the DOM. React takes care of this. (Declarative programming)

The DOM is rewritten automatically when the in-memory state changes.  

React compare versions of the DOM in-memory before updating the browser. 
Smart diffing-algorithm => Only updates what is changed. Keeps everything else the same.


# JSX 

React Components are not written in HTML, or JS. It's written in JSX. Which is then compiled to React API calls. One such compiler is Babel. 

```jsx
<div>Hello World</div>
```
is compiled to 
```jsx
React.createElement("div", null, "Hello World");
```
So you write something that looks like HTML, and Babel is compiling it to React API calls.

ReactDOM.render (takes a component and a DOM element) and React events.

# Beginner mistakes

- Always start React Component Name with Upper Case. 
- When returning mutiple lines, use () not {}. We are not returning an object, we are returning a function call 

# onCLick Event Handler

HTML - onclick

React - onClick. 

React uses a function referende. It must be inside curly brakets {}. 
- `onclick={functionRef}` <-- Correct
- `onClick={functionRef()}` <-- WRONG: You cannot invoke the function, just use the reference (the pointer)
- `onClick={() ⇒ function()}` <-- Correct: You can put the function definition inside. Here you can use the consise Arrow function. 

# React.Fragment <></>

If you want to return multiple components, but dont want to add a new DOM element (`<div>`) you can use `<React.Fragment>`. This is so common that they have the shortcut: 

```jsx
<>  // Translates to <React.Fragment>
 <Component1 /> 
 <Component2 />
</>
```

# Props and State

**Props**
- Props are similar to a list of attributes in HTML. (its explisit)
- Props are fixed, immutable.
- Props can hold functions as well, not just data. 
- A component has a props parameter even when you havent sendt in any props. 


**State**
State is internal. React uses it to autoreflect changes in the browser. 
Every time a component changes it's state, React rerenders it.

A React Component can only change its internal state, not it's properties.
But the whoe component can be rerendered with different props, by the components parent. 

`useState()` hooks the component into the state:
```JSX
const [click, setClick] = useState(0);
```

# Responsibility Isolation 

When sending props, the components parent is in control. 
The child is just following generic rules and invoke a generic function. 
The parent control the function to be invoked. This is the isolation of resposibilities 

Developer have to answer this question alot: Where to define the state? Answer: Down in the tree as close as possible to the children that need to access that state. 