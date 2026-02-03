import React, { useEffect, useState } from "react";

const FaqAccordion = ({
  items,
  headingTag = "span",
  defaultOpenAll = false,
  closeLabel = "Kapat",
}) => {
  const [openItems, setOpenItems] = useState(() =>
    (items ?? []).map(() => defaultOpenAll)
  );

  useEffect(() => {
    setOpenItems((items ?? []).map(() => defaultOpenAll));
  }, [items, defaultOpenAll]);

  if (!items || items.length === 0) {
    return null;
  }

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.map((isOpen, idx) => (idx === index ? !isOpen : isOpen))
    );
  };

  const closeItem = (index) => {
    setOpenItems((prev) =>
      prev.map((isOpen, idx) => (idx === index ? false : isOpen))
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={`${item.question}-${index}`}
          open={openItems[index]}
          onToggle={(event) => {
            if (event.target.open !== openItems[index]) {
              toggleItem(index);
            }
          }}
          className="group rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all"
        >
          <summary
            className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-gray-900"
          >
            {React.createElement(
              headingTag,
              { className: "text-left text-lg font-semibold text-gray-900" },
              item.question
            )}
            <span
              className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#00a0e3] transition-transform ${
                openItems[index] ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </summary>
          <div className="mt-4 text-base leading-relaxed text-gray-600">
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => closeItem(index)}
                className="rounded-full border border-gray-200 px-4 py-1 text-sm font-medium text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900"
              >
                {closeLabel}
              </button>
            </div>
            {item.answer}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => closeItem(index)}
                className="rounded-full border border-gray-200 px-4 py-1 text-sm font-medium text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900"
              >
                {closeLabel}
              </button>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
};

export default FaqAccordion;
