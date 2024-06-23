import { Tabs } from "@/components/ui/tabs";
import TablePage from "./table/table-page";
export async function BooksTabs() {
  const tabs = [
    {
      title: "First",
      value: "first",
      content: (
        <div className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-gray-100 overflow-y-auto">
          <p>First Tab</p>
          <TablePage />
        </div>
      )
    },
    {
      title: "Second",
      value: "second",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Second tab</p>
        </div>
      )
    },
    {
      title: "Third",
      value: "third",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Third tab</p>
        </div>
      )
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
