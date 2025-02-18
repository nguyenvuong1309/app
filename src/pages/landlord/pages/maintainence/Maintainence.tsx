import { useEffect, useRef, useState } from "react";
import { IProperty } from "../../types/Property.type";
import { PropertyCard } from "../../components/PropertyCard";
import { SearchBar } from "../../components/SearchBar";
import { Button } from "../../../../components/ui/button";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  CalendarIcon,
  Upload,
  Maximize,
  Pause,
  Play,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PATH from "../../../../config/path";
import axios from "axios";
import { ACCESS_TOKEN, USER } from "../../../../utils/Constants";
import { AdminSideBar } from "../../components/AdminSidebar";
import { AdminHeader } from "../../components/AdminHeader";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { Calendar } from "../../../../components/ui/calendar";
import { MaintainenceRequestItem } from "./components";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { cn } from "../../../../utils";
import { format } from "date-fns";

interface FileWithPreview extends File {
  preview: string;
  type: string;
}

export const Maintainence = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<IProperty[] | []>([]);
  const [products, setProducts] = useState<any[] | []>([1, 2, 3]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);

  const handleEdit = (id: string) => {
    navigate(PATH.LANDLORD + PATH.UPDATE_OASIS + "/" + id);
  };

  const handleSearch = (query: string) => {
    console.log(`Searching for ${query}`);
  };

  const onAddOasis = () => {
    navigate(PATH.LANDLORD + PATH.CREATE_NEW_OASIS);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}/api/oasis/?page=1&pageSize=5&search=&ordering=-id`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
          },
        }
      );
      // setProperties(data.data.data.data);
      //   setProducts(data.data.data.data);
    };
    fetchData();
  }, []);
  const filteredProducts = products;

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset the table to the first page whenever rows per page changes
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
        type: file.type,
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files).map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
        type: file.type,
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
    if (playingIndex === index) {
      setPlayingIndex(null);
    }
  };

  const toggleVideoPlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingIndex === index) {
        video.pause();
        setPlayingIndex(null);
      } else {
        if (playingIndex !== null) {
          videoRefs.current[playingIndex]?.pause();
        }
        video.play();
        setPlayingIndex(index);
      }
    }
  };

  const openFullScreen = (index: number) => {
    setFullScreenIndex(index);
  };
  const handleFilterChange = () => {};

  const filterText = "";

  const handleClickOpen = () => {};

  const handleClickOpenEdit = () => {};

  const handleConfirmOpen = () => {};

  const handleClose = () => {};

  const handleCloseEdit = () => {};

  const handleCloseAdd = () => {};

  const handleCloseDelete = () => {};

  const handleCloseConfirm = () => {};

  const handleCloseSnackbar = () => {};

  const handleDelete = () => {};

  const handleAdd = () => {};

  const handleConfirmClose = () => {};

  const handleConfirmDelete = () => {};

  const handleConfirmEdit = () => {};

  return (
    <div className="p-6 mt-20">
      <div className="relative">
        <TableContainer>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="w-full md:w-96">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="flex min-h-[50px] items-center justify-center">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="default"
                    className="rounded-full bg-teal-600 px-6 hover:bg-teal-700"
                  >
                    Create New Issue
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] w-[90vw] max-w-[500px] rounded-3xl border-gray-200">
                  <ScrollArea className="max-h-[calc(90vh-4rem)] pr-4">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-semibold">
                        Create New Issue
                      </DialogTitle>
                    </DialogHeader>
                    <form className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <label className="text-base font-medium">Oasis</label>
                        <Select>
                          <SelectTrigger className="h-12 rounded-lg border-gray-300">
                            <SelectValue placeholder="Select Oasis" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oasis1">Oasis 1</SelectItem>
                            <SelectItem value="oasis2">Oasis 2</SelectItem>
                            <SelectItem value="oasis3">Oasis 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-base font-medium">
                          Lease (optional)
                        </label>
                        <Select>
                          <SelectTrigger className="h-12 rounded-lg border-gray-300">
                            <SelectValue placeholder="Select Lease" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lease1">Lease 1</SelectItem>
                            <SelectItem value="lease2">Lease 2</SelectItem>
                            <SelectItem value="lease3">Lease 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-base font-medium">
                          Issue Category
                        </label>
                        <Select>
                          <SelectTrigger className="h-12 rounded-lg border-gray-300">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maintenance">
                              Maintenance
                            </SelectItem>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="electrical">
                              Electrical
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-base font-medium">
                          Issue Title
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter issue title"
                          className="h-12 rounded-lg border-gray-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-base font-medium">
                          Description
                        </label>
                        <div className="text-sm text-gray-500">
                          Add as much detail as possible including specific
                          location
                        </div>
                        <Textarea
                          placeholder="Enter description"
                          className="min-h-[120px] rounded-lg border-gray-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-base font-medium">
                          Time Preference to Enter
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "h-12 w-full justify-start rounded-lg border-gray-300 text-left font-normal",
                                !date && "text-gray-500"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date
                                ? format(date, "MMM/dd/yyyy")
                                : "MMM/DD/YYYY"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={(day) => setDate(day)}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <label className="text-base font-medium">
                          Photos & Videos (optional)
                        </label>
                        <div
                          className="relative flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50/50 px-6 py-8 text-center hover:bg-gray-50"
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                          onClick={() =>
                            document.getElementById("file-upload")?.click()
                          }
                        >
                          <Upload className="mx-auto h-8 w-8 text-gray-400" />
                          <div className="mt-2 text-sm text-gray-500">
                            Click or Drag to Upload Images & Videos
                          </div>
                          <div className="mt-1 text-xs text-gray-400">
                            Supported formats: PNG, JPG, MP4, WebM
                          </div>
                          <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            multiple
                            accept="image/*,video/*"
                            onChange={handleFileChange}
                          />
                        </div>

                        {files.length > 0 && (
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            {files.map((file, index) => (
                              <div
                                key={index}
                                className="relative rounded-lg border border-gray-200 bg-white p-2"
                              >
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(index);
                                  }}
                                  className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                                >
                                  <X className="h-4 w-4" />
                                </button>

                                {file.type.startsWith("image/") ? (
                                  // Image Preview
                                  <div className="relative">
                                    <img
                                      src={file.preview || "/placeholder.svg"}
                                      alt={file.name}
                                      className="h-40 w-full rounded object-cover"
                                    />
                                    <button
                                      onClick={() => openFullScreen(index)}
                                      className="absolute bottom-2 right-2 p-1 bg-black bg-opacity-50 rounded text-white hover:bg-opacity-75 transition-colors"
                                    >
                                      <Maximize className="h-4 w-4" />
                                    </button>
                                  </div>
                                ) : file.type.startsWith("video/") ? (
                                  // Video Preview
                                  <div className="relative">
                                    <div
                                      className="relative h-40 cursor-pointer"
                                      onClick={() => toggleVideoPlay(index)}
                                    >
                                      <video
                                        ref={(el) => {
                                          if (el) videoRefs.current[index] = el;
                                        }}
                                        src={file.preview}
                                        className="h-full w-full rounded object-cover"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                        {playingIndex === index ? (
                                          <Pause className="h-12 w-12 text-white opacity-80" />
                                        ) : (
                                          <Play className="h-12 w-12 text-white opacity-80" />
                                        )}
                                      </div>
                                    </div>
                                    <button
                                      onClick={() => openFullScreen(index)}
                                      className="absolute bottom-2 right-2 p-1 bg-black bg-opacity-50 rounded text-white hover:bg-opacity-75 transition-colors"
                                    >
                                      <Maximize className="h-4 w-4" />
                                    </button>
                                  </div>
                                ) : null}

                                <div className="mt-2 truncate text-xs text-gray-500">
                                  {file.name}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end pb-2 pt-4">
                        <Button
                          type="submit"
                          className="h-11 min-w-[100px] rounded-full bg-teal-600 text-white hover:bg-teal-700"
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <hr></hr>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }} scope="col">
                  #
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} scope="col">
                  Oasis
                </TableCell>
                <TableCell scope="col"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts !== null ? (
                filteredProducts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product, index) => {
                    console.log(product);
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell sx={{ fontSize: "1.1rem" }} scope="row">
                          {page * rowsPerPage + index + 1}
                        </TableCell>

                        <TableCell sx={{ fontSize: "1.1rem" }}>
                          <Link to={``} state={{ currentProduct: product }}>
                            <MaintainenceRequestItem
                              status="Open"
                              title="Leaking Toilet"
                              location="Edmonton, AB T1A 2J3"
                              requesterName="Liliana"
                              description="A bit of water is leaking from the right side of the toilet. Happening maybe every 2 flushes and worried water may cause damage in the bathroom."
                            />
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell>Loading... </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            sx={{ fontSize: "1.1rem" }}
            component="div"
            count={products != null ? products.length : 0}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
          />
        </TableContainer>

        <div className="absolute top-1/2 -left-12 transform -translate-y-1/2">
          <Button variant="ghost" size="icon" className="text-teal-600">
            <ChevronLeft className="h-8 w-8" />
          </Button>
        </div>
        <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
          <Button variant="ghost" size="icon" className="text-teal-600">
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};
