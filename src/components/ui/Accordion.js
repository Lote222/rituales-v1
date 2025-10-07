'use client';

import { useState } from 'react';

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-secondary/20">
      <button
        className="w-full flex justify-between items-center text-left py-5 px-6"
        onClick={onClick}
      >
        <span className="text-lg font-serif font-semibold text-foreground">{item.question}</span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <PlusIcon />
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="bg-[#F9F7F2] p-6">
            <p className="text-muted leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto border border-secondary/20 rounded-lg">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19" stroke="#2E4034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 12H19" stroke="#2E4034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Accordion;