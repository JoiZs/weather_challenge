import { Copy, Search } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { DialogTitle } from "@radix-ui/react-dialog";

export function SearchButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full backdrop-blur backdrop:blur-xl">
        <DialogTitle className="hidden">Search</DialogTitle>
        <div className="flex items-center space-x-2 px-4">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="city" className="sr-only">
              City
            </Label>
            <Input id="city" placeholder="Search by city..." />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <Search />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
