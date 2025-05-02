import { Metadata } from "next";
// import { ServiceCard } from "../../components/ServiceCard";
import { ServiceHeader } from "@/components/ServiceHeader";
import { IService } from "@/@core/interfaces/services";

export const metadata: Metadata = {
  title: "Xidmətlər | Birainy",
  description: "Birainy şirkətinin təklif etdiyi xidmətlərlə tanış olun.",
};

const services: IService[] = [
  {
    id: 1,
    title: "",
    content: ``,
    image: "",
    iframe: "",
    cards: [
      {
        id: 1,
        title: "",
        content: "",
        image: "",
      },
    ],
    data_list: {
      accordion: true,
      content: [
        {
          id: 1,
          title: "",
          content: "",
        },
      ],
    },
    parent_id: null,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-12 max-w-7xl">
      <ServiceHeader />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))} */}
      </div>
    </main>
  );
}
