import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, checkCard, checkTodo } from "./redux/reducer/reducer";
import { Grid, Button, Typography } from "@mui/material";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Delete from "./Delete";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
const ToDoCard = ({ setUpdate, setFormStatus }) => {
  const DataTodos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // const handleDelet = (id) => {
  //   dispatch(deleteCard(id))
  // }
  const handleUpdate = (todo) => {
    setFormStatus(todo);
    setUpdate("update");
  };

  const handleCompeleted = (id) => {
    dispatch(checkTodo(id));
  };

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  //

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      fontFamily={"dana"}
      sx={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Grid container item dir={"rtl"} xs={12} md={8}>
        <Grid mt={5} dir={"rtl"} mr={2}>
          <Link to={`/Form`}>
            <Button 
              sx={{
                bgcolor: "primary.dark",
                width: "150px",
                color: "common.white",
                borderRadius: 2,
               
                "&:hover": {
                  bgcolor: "common.white",
                  color: "primary.dark",
                  border: "1px solid",
                  borderColor: "primary.dark",
                },
              }}
            >
              <Typography ml={2} fontSize={"14px"} sx={{ cursor: "pointer" }}>
                کار جدید
              </Typography>

              <ControlPointRoundedIcon />
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          display={"flex"}
          sx={{ border: "1px solid #8888 ", borderRadius: "10px" }}
          xs={12}
          mb={2}
          mt={7}
        >
          <IconButton type="button" sx={{ p: "11px" }} aria-label="جستجو">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ "aria-label": "search google maps" }}
            onChange={handleSearch}
            placeholder="جستجوی عبارت مورد نظر ..."
          />
        </Grid>
        <Grid container item flexDirection={"column"}>
          {DataTodos.map((todo) => (
            <Grid
              key={todo.id}
              border={1}
              borderRadius={4}
              mb={2}
              justifyContent={"space-between"}
              display={"flex"}
              padding={"16px"}
              sx={{ background: todo.color }}
            >
              <Grid>
                <Grid
                  item
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid>
                    <input
                      type={"radio"}
                      checked={todo.compeleted}
                      onClick={() => handleCompeleted(todo.id)}
                    />
                  </Grid>
                  <Grid mr={2} flexWrap={"wrap"}>
                    <Typography
                      sx={{
                        textDecoration: todo.compeleted
                          ? "line-through"
                          : "unset",
                      }}
                    >
                      {todo.title}
                    </Typography>
                    <Typography>{todo.f}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ cursor: "pointer" }} color={"#FFF"}>
                <Delete todo={todo} />
                <Link to={"/Form"}>
                  <Button
                    variant="outline"
                    onClick={() => handleUpdate(todo)}
                    sx={{ cursor: 'pointer' }}  color={"#FFF"}
                  >
                    <ModeEditOutlineRoundedIcon />
                  </Button>
                </Link>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ToDoCard;
