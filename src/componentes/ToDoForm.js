import React from "react";
import { useDispatch } from "react-redux";
import { addCard, updateCard } from "./redux/reducer/reducer";
import { Grid, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link, useNavigate } from "react-router-dom";

const ToDoForm = ({
  update,
  setUpdate,
  FormStatus,
  setFormStatus,
  setStatus,
}) => {
  const dispatch = useDispatch();
  const back = useNavigate();
  const colors = [
    { colorname: "#b71c1c" },
    { colorname: "#ff9800" },
    { colorname: "#FFEB3B" },
    { colorname: "#311b92" },
    { colorname: "#e65100" },
    { colorname: "#3F71F7" },
  ];
  const handleColor = (colorName) => {
    setFormStatus({ ...FormStatus, color: colorName });
  };

  const handleChange = (e) => {
    setFormStatus({ ...FormStatus, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    back("/");
    event.preventDefault();
    if (update === "add") {
      dispatch(
        addCard({ ...FormStatus, id: Math.floor(Math.random() * 1000) })
      );
    } else {
      dispatch(updateCard(FormStatus));
    }
    setFormStatus({
      id: Math.floor(Math.random() * 1000),
      f: "",
      title: "",
    });
    setUpdate("add");
  };
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} dir={"rtl"}>
      <form onSubmit={handleSubmit}>
        <Grid container maxWidth={"600px"} spacing={3} p={2}>
          <Grid
            item
            xs={12}
            my={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              name={"title"}
              value={FormStatus.title}
              onChange={handleChange}
              required
              sx={{
                width: "80%",
                ".css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "16px",
                },
              }}
              label="موضوع"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            xs={12}
            my={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TextField
              name={"f"}
              value={FormStatus.f}
              onChange={handleChange}
              required
              sx={{
                width: "80%",
                ".css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "16px",
                },
              }}
              label="توضیحات"
              variant="outlined"
            />
          </Grid>
          <Grid mt={7}>
            <Typography variant="h3">
              {"رنگ مورد نظر را برای کارت انتخاب کنید ..."}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            my={4}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            mt={5}
          >
            {colors.map((color) => (
              <Grid>
                <Grid
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: color.colorname,
                    border:
                      FormStatus.color === color.colorname
                        ? "1px solid #000"
                        : "unset",
                  }}
                  onClick={() => handleColor(color.colorname)}
                />
              </Grid>
            ))}
          </Grid>
          <Grid display={"flex"}  xs={12} justifyContent={"space-between"}  mt={5}>
            <Grid item  mr={5}>
           
              <Button variant="contained" type="submit" sx={{
                            boxShadow: 'none',
                            bgcolor: 'primary.dark',
                            minWidth: '200px',
                            maxWidth: '260px',
                            borderRadius: '12px'
                        }}
                                disabled={!(FormStatus.title  && FormStatus.color && FormStatus.f)}>
                {update === "add" ? <AddOutlinedIcon /> : <BorderColorIcon />}
              </Button>
            </Grid>
            {/* <Grid item  bgcolor={"gold"} justifyContent={"flex-start"}>
              <Link to={`/`}>
                <Button variant="contained" type="submit" >برگشت به صفحه اصلی </Button>
              </Link>
            </Grid> */}
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default ToDoForm;
