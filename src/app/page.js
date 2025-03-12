import Image from "next/image";
// components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div>
            <div className="text-xl font-medium text-black">smart city insights</div>
            <p className="text-gray-500 text-center">Tailwind CSS </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <Button variant="default">輪廓按鈕</Button>
          <Badge variant="outline">Badge</Badge>

          {/* <div className="bg-yellow-500 p-4 text-white rounded">藍色方塊</div>
          <div className="bg-green-500 p-4 text-white rounded">綠色方塊</div>
          <div className="bg-red-500 p-4 text-white rounded">紅色方塊</div> */}
        </div>
      </div>
    </>
  );
}
