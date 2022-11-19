import styled from "@emotion/styled";
import {
  Button,
  Card,
  Typography,
  Modal,
  Box,
  CardContent,
  CardMedia,
  Paper,
  TextField,
  Alert,
} from "@mui/material";
import axios from "../../Utils/axios";
import {  useState } from "react";
import { useParams } from "react-router-dom";
import {
    BarChart,
    Bar,
  } from "recharts";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 470,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const textfield = {
  margin: "10px 5px",
};

function Profile(props) {
  let data = props.data;
  let params = useParams();
  const Data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  let BASE_URL = "http://127.0.0.1:8000/";
  const Span = styled.span`
    font-family: monospace;
    font-weight: bold;
  `;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [shortName, setShortName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [contactExt, setContactExt] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [team, setTeam] = useState();

  const [successResponse,setSuccessResponse] = useState()
  const [errorResponse,setErrorResponse]  = useState()
  let StateManagement = ()=>{
    handleOpen()
    setTitle(data.title)
    setFirstName(data.first_name)
    setLastName(data.last_name)
    setShortName(data.short_name)
    setEmail(data.email)
    setContact(data.contact)
    setContactExt(data.contact_ext)
    setJobTitle(data.job_title)
    setTeam(data.team)
  }

  // submit edited details
  let SubmitEditData = (e) => {
    
    e.preventDefault();
    axios
      .patch(`employee/${params.id}/`, {
        title:title,
        first_name:firstName,
        last_name:lastName,
        short_name:shortName,
        email:email,
        contact:contact,
        contact_xt:contactExt,
        job_title:jobTitle,
        team:team,
      })
      .then((response) => {
        if (response.status===200){
            setSuccessResponse('Profile edited successfully!')
            handleClose()
        }else{
            setErrorResponse('Something goes wrong, Please try agiain')
        }
      })
      .catch((error)=>{
            setErrorResponse('Something goes wrong, Please try agiain')
      })
  };
  return (
    <div align="center">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data && (
            <form onSubmit={SubmitEditData}>
              <div
                style={{
                  overflow: "scroll",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  sx={textfield}
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  label="Title"
                >
                  {" "}
                </TextField>
                <TextField
                  sx={textfield}
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  label="First Name"
                >
                  {" "}
                </TextField>
                <TextField
                  sx={textfield}
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  label="Last Name"
                >
                  {" "}
                </TextField>
                <TextField
                  sx={textfield}
                  onChange={(e) => setShortName(e.target.value)}
                  value={shortName}
                  label="Short Name"
                >
                  {" "}
                </TextField>
                <TextField
                  sx={textfield}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  label="Email"
                >
                  {" "}
                </TextField>
                <TextField
                  sx={textfield}
                  onChange={(e) => setContact(e.target.value)}
                //   value={email}
                  value={contact}
                  label="Contact"
                >
                  {" "}
                </TextField>
                <TextField
                  sx={textfield}
                  onChange={(e) => setContactExt(e.target.value)}
                  value={contactExt}
                  label="Contact Ext"
                >
                  {" "}
                </TextField>
                <TextField
                  sx={textfield}
                  onChange={(e) => setTeam(e.target.value)}
                  value={team}
                  label="Team"
                >
                  {" "}
                </TextField>
                <TextField
                  sx={textfield}
                  onChange={(e) => setJobTitle(e.target.value)}
                  value={jobTitle}
                  label="Job Title"
                  fullWidth
                >
                  {" "}
                </TextField>
                <Box align="center" sx={{ margin: "auto", marginTop: "10px" }}>
                  <Button type="submit" sx={{ width: "150px" }}>
                    submit
                  </Button>
                </Box>
              </div>
            </form>
          ) }
        </Box>
      </Modal>

      <Card elevation={0}>
        {errorResponse&&<Alert severity="error" onClose={()=>setErrorResponse(null)}>{errorResponse}</Alert>}
        {successResponse&&<Alert severity="success" onClose={()=>setSuccessResponse(null)}>{successResponse}</Alert>}
        {data && (
          <>
            <Paper
              elevation={5}
              sx={{
                borderBottom: 7,
                borderColor: "primary.main",
                borderRadius: "10px",
                width: "200px",
                marginTop: "10px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                sx={{ width: "200px" }}
                image={BASE_URL + data ? data.image_lg : null}
                alt="employee"
              />
            </Paper>
            <CardContent>
              <Typography>
                Name :
                <Span>
                  {data.title}. {data.first_name} {data.last_name}
                </Span>
              </Typography>
              <Typography>
                Short Name : <Span>{data.short_name}</Span>
              </Typography>

              <Typography>
                Job Title : <Span>{data.job_title}</Span>
              </Typography>
              <Typography>
                Team : <Span>{data.team}</Span>
              </Typography>
              <Typography>
                Email : <Span>{data.email}</Span>
              </Typography>
              <Typography>
                Contact :{" "}
                <Span>
                  {data.contact_ext} {data.contact}
                </Span>
              </Typography>
              <hr />
              <Typography>
                Is Logged In : <Span>{data.logged_in ? "Yes" : "No"}</Span>
              </Typography>
              <Typography>
                Join Date : <Span>{data.join_date}</Span>
              </Typography>
            </CardContent>
          </>
        )}
        <Button onClick={StateManagement} variant='outlined'>Edit</Button>
              <div style={{marginTop:'100px'}}>
        <BarChart sx={{marginTop:'100px'}} width={250} height={140} data={Data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
        </div>
    </Card>
    </div>
  );
}

export default Profile;
