import { Button } from "../ui/button";
import { DatePicker } from "../ui/datePicker";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaRegCalendarAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { TbStairsUp } from "react-icons/tb";

export default function TourSelectionCard() {
  // const [filter, setFilter] = useState(null);
  return (
    <div className=" rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
        <div className="w-full p-2 md:flex-1">
          <div className="flex items-center text-left md:text-center">
            <IoLocationOutline className="mr-2" />
            <p>From</p>
          </div>
          <Input className="w-full" placeholder="From" />
        </div>
        <div className="w-full p-2 md:flex-1">
          <div className="flex items-center text-left md:text-center">
            <GrMapLocation className="mr-2" />
            <p>Destination</p>
          </div>
          <Input className="w-full" placeholder="Destination" />
        </div>
        <div className="w-full p-2 md:flex-1">
          <div className="flex items-center text-left md:text-center">
            <TbStairsUp className="mr-2" />
            <p>Difficulty</p>
          </div>{" "}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full p-2 md:flex-1">
          <div className="flex items-center text-left md:text-center">
            <FaRegCalendarAlt className="mr-2" />
            <p>Start Date</p>
          </div>{" "}
          <DatePicker />
        </div>
        <div className="w-full p-2 md:flex-1">
          <div className="md:h-6 md:invisible"></div>{" "}
          <Button className="w-full">Inquire Now</Button>
        </div>
      </div>
    </div>
  );
}
