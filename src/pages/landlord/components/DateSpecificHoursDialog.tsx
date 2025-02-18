"use client";

import * as React from "react";
import { Calendar } from "../../../components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { TimePickerDialog } from "./TimePickerDialog";

interface DateSpecificHoursDialogProps {
  onAdd: (date: Date, startTime: string, endTime: string) => void;
}

export function DateSpecificHoursDialog({
  onAdd,
}: DateSpecificHoursDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date>();
  const [startTime, setStartTime] = React.useState("09:00");
  const [endTime, setEndTime] = React.useState("17:00");

  const handleTimeChange = (start: string, end: string) => {
    setStartTime(start);
    setEndTime(end);
  };

  const handleAdd = () => {
    if (date) {
      onAdd(date, startTime, endTime);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">+ Add date-specific hours</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Date-Specific Hours</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <div className="flex items-center gap-4">
            <span>Hours:</span>
            <TimePickerDialog
              startTime={startTime}
              endTime={endTime}
              onTimeChange={handleTimeChange}
              trigger={
                <Button variant="outline">
                  {startTime} - {endTime}
                </Button>
              }
            />
          </div>
          <Button onClick={handleAdd} disabled={!date}>
            Add Hours
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
