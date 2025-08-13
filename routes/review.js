const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/WrapAsync.js");
const {validateReview, isloggedIn, isreviewAuthor} = require("../middleware.js");
const reviewController = require("../controller/reviews.js");


 
//Post Review Rount
router.post("/" ,isloggedIn, validateReview,wrapAsync(reviewController.createReview));


//Delete Review Rount
router.delete("/:reviewId" ,isloggedIn,isreviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;