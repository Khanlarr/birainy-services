"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ICard,
  IContent,
  IDataList,
  TreeNode,
} from "@/@core/interfaces/services";

interface ServiceCardProps {
  data: TreeNode[];
}

//QEYD:
// Componentləri başqa foldera çixartmaq olar

export function ServiceCard({ data }: ServiceCardProps) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const tab = searchParams.get("tab");

  const selectedNode = useMemo(() => {
    const main = data.find((item) => String(item.id) === id);
    const child = main?.children?.find((c) => String(c.id) === tab);
    return child || main || data[0];
  }, [data, id, tab]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  if (!selectedNode) return null;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-black font-ppneue text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
        {selectedNode.title}
      </h1>

      <div
        className="list-disc list-inside pl-5 text-[rgba(0,0,0,.72)] text-base sm:text-lg md:text-xl font-normal leading-[1.5]"
        dangerouslySetInnerHTML={{ __html: selectedNode.content || "" }}
      />

      {selectedNode.data_list && (
        <DataList
          dataList={selectedNode.data_list}
          openIndex={openIndex}
          onToggle={toggleAccordion}
        />
      )}

      <ActionButtons />

      {selectedNode.image && (
        <Image
          src={selectedNode.image}
          alt="Image"
          width={500}
          height={300}
          layout="responsive"
          className="rounded-lg"
        />
      )}

      {selectedNode.iframe && (
        <iframe
          src={selectedNode.iframe}
          title="Iframe"
          className="w-full h-[350px] sm:h-[350px] md:h-[420px] lg:h-[500px] rounded-lg"
        />
      )}

      {selectedNode.cards && <Cards cards={selectedNode.cards} />}
    </div>
  );
}

function DataList({
  dataList,
  openIndex,
  onToggle,
}: {
  dataList: IDataList;
  openIndex: number | null;
  onToggle: (index: number) => void;
}) {
  if (dataList.accordion) {
    return (
      <div>
        {dataList.content.map((item: IContent, index: number) => (
          <div key={item.id}>
            <button
              onClick={() => onToggle(index)}
              className="w-full flex items-center gap-6 p-4 cursor-pointer"
            >
              <ChevronIcon isOpen={openIndex === index} />
              <h2 className="text-lg font-medium text-gray-800 sm:text-base">
                {item.title}
              </h2>
            </button>
            {openIndex === index && (
              <div className="p-4 px-14 border-b bg-white">
                <p className="text-base text-gray-600 sm:text-sm">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap items-stretch gap-4">
      {dataList.content.map((item: IContent) => (
        <div
          key={item.id}
          className="p-4 bg-gray-100 rounded-lg shadow-md min-w-[250px] sm:min-w-[200px] w-[49%] flex flex-row justify-between items-baseline flex-grow"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-800 sm:text-lg">
            {item.title}
          </h2>
          <p className="text-base text-gray-600 sm:text-sm">{item.content}</p>
        </div>
      ))}
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
      <a
        href=""
        className="bg-[#f7d000] text-black flex items-center justify-center gap-3 rounded-lg py-3 px-10 sm:px-12 md:px-14 w-full sm:w-auto"
      >
        Bizimlə əlaqə saxlayın
      </a>
      <a
        href=""
        className="bg-[#e6e6e6] text-black flex items-center justify-center gap-3 rounded-lg py-3 px-10 sm:px-12 md:px-14 w-full sm:w-auto"
      >
        İşlərimizə nəzər yetirin
      </a>
    </div>
  );
}

function Cards({ cards }: { cards: ICard[] }) {
  return (
    <div className="flex flex-row flex-wrap items-stretch gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-lg shadow-md overflow-hidden w-[48%] flex flex-col flex-grow justify-between"
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700 mb-4">{card.content}</p>
          </div>
          <Image
            src={card.image}
            alt="Card Image"
            width={500}
            height={300}
            layout="responsive"
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={`transition-transform duration-300 ${
        isOpen ? "rotate-90" : ""
      }`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
        fill="#1F2937"
      />
    </svg>
  );
}
