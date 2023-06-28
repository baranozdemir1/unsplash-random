const express = require("express");
const axios = require("axios").default;
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const unsplashAccessKey = "Uffd5I4F_ngX6I9BBtbtB_tEeZtfi-uHAUV00M5o1-4";
const unsplashSecretKey = "mjbc5NN-idGRdioO6PmWUJftc3igRS2DXTzQUcHiIM8";

app.get("/", async (req, res) => {
  let fullUrl = req.originalUrl;
  let queryString = fullUrl.split("?")[1];

  const photo = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}`,
    {
      params: {
        query: queryString,
        count: 1,
      },
    }
  );

  res.redirect(photo.data[0].urls.raw + "&w=800&h=552");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
