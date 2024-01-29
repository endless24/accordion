import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="">
      <Accordion data={faqs} />
    </div>
  );
}

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItems
          title={el.title}
          num={index}
          key={el.title}
          isOpen={isOpen}
          onOpen={setIsOpen}
        >
          {el.text}
        </AccordionItems>
      ))}
    </div>
  );
};

const AccordionItems = ({ num, title, isOpen, onOpen, children }) => {
  // checking if
  const curOpen = num === isOpen;
  //calling the function
  const handleToggle = () => {
    //calling function if it close onclick open or close
    onOpen(curOpen ? null : num);
  };

  return (
    <div className={`item ${curOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>{" "}
      {/* formatting the number*/}
      <p className="title">{title}</p>
      <p className="icon">{curOpen ? "-" : "+"}</p>
      {/* adding the plus and minus*/}
      {curOpen && <p className="content-box">{children}</p>}
      {/* hiddening the content*/}
    </div>
  );
};

export default App;
