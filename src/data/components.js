import { v4 as uuidv4 } from "uuid";

const components = [
  {
    name: "Carousel.js",
    demo: "https://react-carousel-ui.netlify.app/",
    github: "https://github.com/YutaMoriJP/Carousel-React",
    id: uuidv4(),
    explanation:
      "A React component API that helps users to build a Carousel UI. The API is easy to use where the user needs to pass an array that contains an object as its element. The object literal should look like {src, id, alt}. Look at the demo to see it in action or jump to the Github repo to learn more about the implementation details.",
  },
  {
    name: "Modal.js",
    demo: "https://csb-3y7ne.netlify.app/",
    sandbox: "https://codesandbox.io/s/modaljs-3y7ne?file=/src/Modal/Modal.js",
    id: uuidv4(),
    explanation: `The Modal Component is broken down into 3 components that are composed to achieve a simple modal UI.
    \n <Box/> - manages the open state, and renders the Modal if the open state is true. The <Box/> component passes open, onOpen (updates the open state to true), and onClose (updates the open state to false) as props to the <Modal /> component.\n<Modal/>: this component renders a simple text like "Open Modal" via props.children.
    If that text is clicked, then the onOpen function is called, which makes <Box/> update the open state to true
    and renders <Message/>, which is essentially the rendered modal.\n
    \n<Modal/> - runs the useEffect hook, it accepts 2 deps value
    open and onClose. Inside the effect, if the open state is true, 
    it subscribes to a click event to the document.body node. 
    So, if the message box (modal) is open, then clicking on any part of the screen will close the modal
    as the event handler will call onClose. In order to avoid memory leaks, the useEffect
    hook returns a function, and in that function, document.body.removeEventListener is called and it unsubscribes the click event handler from document.body.
    \n
    \n<Message/>: if the open state is true, then <Box/> renders <Message/> - {open && <Message/>}.
    The root element of this component has CSS applied that centers the Message box (the Modal). 
    The Message box being rendered to the screen means that the open state is true,
    so document.body is subscribed to a click event as described above in the <Modal /> section.
    This means that clicking inside the message box should also close the message box.
    To avoid that, the root element of <Message/> listens to a click event
    and the event handler calls event.stopPropagation, which stops the clicking
    event bubbling up to the root, so clicking on anything inside the root element of <Message /> component is safe. 
    `,
  },
  {
    name: "Message.js",
    demo: "https://csb-n0wwx.netlify.app/",
    sandbox: "https://codesandbox.io/s/message-n0wwx?file=/src/Message.js",
    id: uuidv4(),
    explanation:
      "The Message Component accepts 3 props, onClose - a function that updates a boolean state to false, ms - a millisecond value that determines how long it takes to close the message, 1000ms is 1 second, and a bgColor prop that determines the background color of the message, useful to convey the type of the message. For example, the color red can be used to notify the user of an error, and green can be used to notify a successful action.",
  },

  {
    name: "Accordion.js",
    demo: "https://react-accordion-component.netlify.app/",
    sandbox:
      "https://codesandbox.io/s/accordion-2-18v20?file=/src/Accordion.js",
    id: uuidv4(),
    explanation:
      "A re-usable React Component that allows users to create an Accordion UI. Pass an array with objects to the options prop of the Accordion component. The object should have an id and content property, and the content gets rendered if the accordion is open.",
  },
  {
    name: "Scroll.js",
    demo: "https://csb-fqu3i.netlify.app/",
    sandbox:
      "https://codesandbox.io/s/scrolltop-scrollbottom-fqu3i?file=/src/Scroll/index.js",
    id: uuidv4(),
    explanation:
      "A re-usable React Scrollbar Component that can be added anywhere to a React app - <Scroll block=”end” behavior=”smooth”/>. The component accepts 2 props, block:string and behavior:string. The block prop controls whether the user is moved to the top or the bottom of the page. If the block prop is 'end', then it moves to the bottom, and if it’s 'start', then the user is moved to the top of the page. The behavior prop controls the scrolling behavior. The default value is “smooth”. Slightly irrelevant to the scrollbar app, I also use CSS Variables to implement the theme of the app, inspired by a blog post from Kent C. Dodds. It also uses a custom hook called useLocalStorage that stores the theme setting in localStorage. If you click on the 'Vanilla JS' link at the top right side of this card UI, you can see the same scrolling API implemented with Vanilla JavaScript. The whole UI is build purely with the DOM API.",
  },

  {
    name: "Image.js",
    demo: "https://csb-3hbon.netlify.app/",
    sandbox: "https://codesandbox.io/s/image-3hbon?file=/src/Image.js",
    id: uuidv4(),
    explanation: ` The Image Component accepts 4 props, src - the url of the image, alt -
    the value of the alt attribute, width and height that controls the
    dimension of the image. It also uses the 
    'react-lazy-load-image-component' to support lazy loading. The src prop
    has a default parameter value that points at a default image. The returned <img/> JSX listens
    to an error event, so if the image was not found for some reason, the
    event handler function uses the event object to assign the
    event.target.src property to the filler image, so that at least something is
    displayed. If the error event is not called, then the useLayoutEffect
    hook is invoked and checks if ref.current.src is falsy, if so, then
    ref.current.src gets also the fillter image assigned. So there's
    multiple error handling to assure that something is rendered.`,
  },
  {
    name: "Delay.js",
    demo: "https://csb-1do8l.netlify.app/",
    sandbox:
      "https://codesandbox.io/s/delay-playground-1do8l?file=/src/Delay/Delay.js",
    id: uuidv4(),
    explanation:
      "This is a reusable component project that I built for fun. Users can wrap their components with the <Delay /> component that asynchronously delays the invocation of the state setter function with the use of the Promise constructor as well as the built in window.setTimeout API. In the demo, users can see how the state update is delayed with a <Counter/> component and a <Fetch/> component. As the name describes, <Counter /> simply allows users to asynchronously increment the count. When the user selects to play with the <Fetch/> component, then <Counter/> unmounts, which would lose the count state. In order to avoid that, I use window.localStorage to store the count state value in localStorage.",
  },
];
export default components;
