import { useState } from "react";
import React from "react";
import { Form } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Profile from "../src/comps/proflle";
import TextField from "@mui/material/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// toDo en egen "style/component för slider, och frågetext"
const schema = z.object({
  question1: z.string({
    required_error: "Please enter your age",
  }),
  question2: z.string(),
  question3: z.string(),
  question4: z.string(),
  comment: z.string().optional(),
});

const formData = {
  question1: 0,
  question2: 0,
  question3: 0,
  question4: 0,
};

function ors() {
  const [data, setData] = useState("");
  const [value, setValue] = React.useState();

  const handleChangeCommitted = (event, newValue) => {
    // Here will only be triggered once the user releases the slider.
    console.log(event.target);
    formData["question1"] = newValue;
    setValue(formData);
  };

  const click = () => {
    // Here will only be triggered once the user releases the slider.
    console.log(value);
    console.log(schema);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleChange = event => {
    console.log(event.target.value);
  };

  const mtHere = 8;

  const onFormSubmit = data => console.log(data);

  const onErrors = errors => console.error(errors);

  return (
    <div>
      <Container maxWidth="sm">
        <Stack spacing={2} sx={{ mb: 5 }}>
          <Typography align="center" variant="qustionsHeadline">
            {" "}
            Skattning av välbefinnande
          </Typography>
          <Typography
            align="center"
            variant="qustionsSubHeadline"
            sx={{ mb: 10, mt: 2 }}
          >
            När du ser tillbaka på den senaste veckan - inklusive idag - kan du
            hjälpa oss att förstå hur du har haft det, genom att markera på
            skalorna hur du upplever att det har fungerat för dig inom följande
            områden i ditt liv:
          </Typography>
        </Stack>

        <Box sx={{ width: "100%" }}>
          <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
            <Stack spacing={2}>
              <Typography
                sx={{ mt: mtHere }}
                gutterBottom
                align="center"
                variant="qustionsHeadline"
                name="question1"
              >
                Individuellt
              </Typography>
              <Typography
                sx={{ mt: mtHere }}
                gutterBottom
                align="center"
                variant="qustionsSubHeadline"
                name="question1"
              >
                Personligt välbefinnande
              </Typography>

              <Slider
                {...register("question1")}
                aria-label="fråga 1"
                color="myColor"
                max={10}
                min={0}
                onChangeCommitted={handleChangeCommitted}
                valueLabelDisplay="auto"
              />
            </Stack>

            <Stack sx={{ mt: mtHere }} spacing={2}>
              <Typography
                gutterBottom
                align="center"
                variant="qustionsHeadline"
              >
                Nära relationer
              </Typography>
              <Typography
                sx={{ mt: mtHere }}
                gutterBottom
                align="center"
                variant="qustionsSubHeadline"
              >
                Familj och andra nära relationer
              </Typography>

              <Slider
                {...register("question2")}
                sx={{ width: "100%" }}
                aria-label="fråga 2"
                name="Fråga 2"
                color="myColor"
                max={10}
                min={0}
                onChangeCommitted={handleChangeCommitted}
                defaultValue={5}
                valueLabelDisplay="auto"
              />
            </Stack>

            <Stack sx={{ mt: mtHere }} spacing={2}>
              <Typography
                gutterBottom
                align="center"
                variant="qustionsHeadline"
                name="Fråga 3"
              >
                Socialt
              </Typography>
              <Typography
                sx={{ mt: mtHere }}
                gutterBottom
                align="center"
                variant="qustionsSubHeadline"
              >
                Arbete, skola vänner
              </Typography>

              <Slider
                sx={{ width: "100%" }}
                {...register("question3")}
                aria-label="fråga 1"
                color="myColor"
                max={10}
                min={0}
                onChangeCommitted={handleChangeCommitted}
                defaultValue={5}
                valueLabelDisplay="auto"
              />
            </Stack>

            <Stack sx={{ mt: mtHere }} spacing={2}>
              <Typography
                gutterBottom
                align="center"
                variant="qustionsHeadline"
                name="Fråga 4"
              >
                Allmänt
              </Typography>
              <Typography
                sx={{ mt: mtHere }}
                gutterBottom
                align="center"
                variant="qustionsSubHeadline"
              >
                Livet som helhet
              </Typography>

              <Slider
                sx={{ width: "100%" }}
                {...register("question4")}
                aria-label="fråga 1"
                color="myColor"
                max={10}
                min={0}
                onChange={handleChange}
                defaultValue={5}
                valueLabelDisplay="auto"
              />
            </Stack>

            {/* <TextField label="Här kan du skriva en kommentar om det är något särskilt som påverkat ditt mående idag?" sx={{width: "100%", height: "10rem", mt: mtHere, }}/>
             */}
            <Button
              type="submit"
              variant="outlined"
              sx={{ float: "right", mb: 3 }}
            >
              Spara
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default ors;
