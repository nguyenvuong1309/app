import { useEffect, useState } from "react";
import { IProperty } from "../../types/Property.type";
import { PropertyCard } from "../../components/PropertyCard";
import { SearchBar } from "../../components/SearchBar";
import { Button } from "../../../../components/ui/button";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
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

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  Button as MuiButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Card,
} from "@mui/material";

export const LandlordDashboard = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<IProperty[] | []>([]);
  const [products, setProducts] = useState<IProperty[] | []>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
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
      setProducts(data.data.data.data);
    };
    fetchData();
  }, []);

  // const filteredProducts = products.filter(
  //   (product) =>
  //     (product.title &&
  //       product.title.toLowerCase().includes(filterText.toLocaleLowerCase())) ||
  //     (product.summary &&
  //       product.summary.toLowerCase().includes(filterText.toLocaleLowerCase()))
  // );
  const filteredProducts = products;

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset the table to the first page whenever rows per page changes
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
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
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <AdminHeader setOpen={setOpenSidebar} />
        <div className="p-6 mt-20">
          {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <Button
              className="bg-teal-600 hover:bg-teal-700"
              onClick={onAddOasis}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add an oasis
            </Button>
            <div className="w-full md:w-96">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div> */}

          <div className="relative">
            {/* <div className="space-y-4">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onEdit={handleEdit}
                />
              ))}
            </div> */}
            <TableContainer>
              {/* <Box display="flex" justifyContent="flex-start">
                <MuiButton variant="contained" onClick={handleClickOpen}>
                  {" "}
                  Add New
                </MuiButton>
              </Box> */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={onAddOasis}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add an oasis
                </Button>
                <div className="w-full md:w-96">
                  <SearchBar onSearch={handleSearch} />
                </div>
              </div>

              {/* <Box display="flex" justifyContent="flex-end">
                <TextField
                  label="Search Products"
                  variant="outlined"
                  value={filterText}
                  onChange={handleFilterChange}
                ></TextField>
              </Box> */}
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
                    {/* <TableCell sx={{ fontWeight: "bold" }} scope="col">
                      Description
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} scope="col">
                      Category
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} scope="col">
                      Date Added
                    </TableCell> */}
                    <TableCell scope="col"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredProducts !== null ? (
                    filteredProducts
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((product, index) => {
                        console.log(product);
                        return (
                          <TableRow
                            key={product.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell sx={{ fontSize: "1.1rem" }} scope="row">
                              {page * rowsPerPage + index + 1}
                            </TableCell>

                            <TableCell sx={{ fontSize: "1.1rem" }}>
                              <Link to={``} state={{ currentProduct: product }}>
                                <PropertyCard
                                  key={product.id}
                                  property={product}
                                  onEdit={handleEdit}
                                />
                              </Link>
                            </TableCell>

                            {/* <TableCell sx={{ fontSize: "1.1rem" }}>
                            {product.summary}
                          </TableCell>
                          <TableCell sx={{ fontSize: "1.1rem" }}>
                            {product.category ? product.category.title : ""}
                          </TableCell>
                          <TableCell sx={{ fontSize: "1.1rem" }}>
                            {new Date(product.createdAt).toLocaleDateString()}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="secondary"
                              onClick={() => handleConfirmOpen(product.id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                            <IconButton
                              color="secondary"
                              onClick={() => handleClickOpenEdit(product)}
                            >
                              <EditIcon />
                            </IconButton>
                          </TableCell> */}
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
      </div>
    </div>
  );
};
