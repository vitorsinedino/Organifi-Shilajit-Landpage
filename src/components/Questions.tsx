import { useState } from "react";
import Image from "../assets/questions.png";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function Questions() {
  const faq = [
    {
      items: [
        {
          id: "gummies-amount",
          question: "How many gummies should I take daily?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "gummies-melt",
          question: "Will the gummies melt during delivery?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
        {
          id: "side-effects",
          question: "Are there any side effects?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        },
      ],
    },
    {
      title: "Customer Service",
      items: [
        {
          id: "contact-support",
          question: "How do I contact customer service if there is a problem?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
        },
        {
          id: "order-speed",
          question: "How fast will I get my order?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        },
        {
          id: "shipping-cost",
          question: "How much is shipping?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
        },
      ],
    },
    {
      title: "Shipping",
      items: [
        {
          id: "ship-from",
          question: "Where does this product ship from?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est qui dolorem ipsum quia dolor sit.",
        },
        {
          id: "refund-policy",
          question: "What kind of refund policy do you offer?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate.",
        },
      ],
    },
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string): void => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="section" id="questions">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-[80px]">
          <div>
            <div className="section-title section-title-rainbow mb-8">
              Frequently asked questions
            </div>
            <img src={Image} alt="Frequently asked questions" />
          </div>
          <div>
            {faq.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {section.title && (
                  <h3 className="faq-title">{section.title}</h3>
                )}

                <ul className="faq-list">
                  {section.items.map((item) => {
                    const isOpen = openId === item.id;

                    return (
                      <li className="faq-item" key={item.id} >
                        <button
                          type="button"
                          onClick={() => toggle(item.id)}
                          aria-expanded={isOpen}
                          className="faq-item-title"
                        >
                          <span className="text">{item.question}</span>
                          <span className="icon">{isOpen ? <FiMinus /> : <FiPlus />}</span>
                        </button>

                        {isOpen && (
                          <div className="faq-item-text">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions;