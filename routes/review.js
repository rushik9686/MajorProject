const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isReviewAuthor, validateReview} = require("../middleware.js");
const { postReview, deleteReview } = require("../controllers/reviews.js");

//Reviews
//Post route
router.post("/",isLoggedIn, validateReview, wrapAsync(postReview));

//delete route
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(deleteReview));

module.exports = router;