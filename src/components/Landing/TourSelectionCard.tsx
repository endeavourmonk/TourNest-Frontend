import { useState } from "react";
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

import calender from "../../assets/calender0.svg";
import location from "../../assets/location.svg";
import level from "../../assets/levels.svg";
import start from "../../assets/start.svg";
import start_flag from "../../assets/start flag.svg";

export default function TourSelectionCard() {
  const [filter, setFilter] = useState(null);
  return (
    <div className="bg-red-100 rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
        <div className="w-full p-2 md:flex-1">
          <div className="flex items-center text-left md:text-center">
            <img className="h-5 pr-2" src={start} />
            <p>From</p>
          </div>
          <Input className="w-full" />
        </div>
        <div className="w-full p-2 md:flex-1">
          <div className="flex items-center text-left md:text-center">
            <img className="h-5 pr-2" src={location} />
            <p>Destination</p>
          </div>
          <Input className="w-full" />
        </div>
        <div className="w-full p-2 md:flex-1">
          <div className="flex items-center text-left md:text-center">
            <img className="h-5 pr-2" src={level} />
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
            <img className="h-5 pr-2" src={calender} />
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
