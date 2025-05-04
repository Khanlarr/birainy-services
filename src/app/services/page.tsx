import { Metadata } from "next";
import { ServiceComponent } from "@/components/services/ServiceComponent";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import service_data from "@/@core/data/service.json";

export const metadata: Metadata = {
  title: "Xidmətlər | Birainy",
  description: "Birainy şirkətinin təklif etdiyi xidmətlərlə tanış olun.",
};

// QEYD:
// Butun hissələrdə csslər saytdakından fərqli ola bilər (figma olmadigindan saytdan inspect edib götürmək istəmədim)
// Əsas contentin admin paneldə editor edilərək fronta göndərildiyini nəzərə alaraq yazılmışdır
// Power bi embed linki olmadigindan məndə (random embed file qoyulmusdur),bu səbəbdən o hissələr açilmaya bilər.düzgün embed file qoyuldugu halda səhifədə görünəcək
// Data daxilində bəzi hissələr optionaldır bununla da dinamikliyi qoruyuruq, yenə də admin paneldə bu hissədə hansı datanın olub olmamasına nəzarət edə bilərik
// Təşəkkürlər...

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ServiceHeader />
      <div>
        <ServiceComponent services={service_data.data ?? []} />
      </div>
    </main>
  );
}
