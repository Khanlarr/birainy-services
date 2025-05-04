import { IService, TreeNode } from "@/@core/interfaces/services";
import { buildTree } from "@/@core/utils/build-tree";
import ServiceTabs from "./ServiceTabs";
import { ServiceCard } from "./ServiceCard";

export function ServiceComponent({ services }: { services: IService[] }) {
  const data: TreeNode[] = buildTree(services);
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="w-full md:basis-1/3">
        <ServiceTabs data={data} />
      </div>
      <div className="w-full md:basis-2/3">
        <ServiceCard data={data} />
      </div>
    </div>
  );
}
