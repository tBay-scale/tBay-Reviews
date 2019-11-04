const getReviews = function() {
  axios.get("/item", {
    params: {
      id: 505050
    }
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
}

const postReview = function() {
  axios.post("/item", {
    productid: 505050,
    rating: 9,
    text: "hubba-bubba",
    user: "TomJones",
    createdAt: "10:30",
    verified: true,
    wouldRecommend: true,
    goodValue: true,
    goodQuality: true,
    helpful: 0,
    notHelpful: 0
  }).then((res) => {
    console.log(res);
  })
}