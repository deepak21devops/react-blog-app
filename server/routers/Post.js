const router = require("express").Router();
const Post = require("../models/Posts");

// Create POST

router.post("/", async (req, res) => {
  const post = new Post(req.body);
  try {
    const saveuserPost = await post.save();
    res.status(200).json(saveuserPost);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Update Post
router.put("/:id", async (req, res) => {
  const user = await Post.findById(req.params.id);
  if (user.username === req.body.username) {
    try {
      const updatePost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatePost);
    } catch (err) {
      res.status(401).json(err);
    }
  } else {
    res.status(404).json("Only Authenticated user can update the post");
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  const mypost = await Post.findById(req.params.id);
  if (mypost.username === req.body.username) {
    try {
      await mypost.delete();
      res.status(200).json("Post Deleted");
    } catch (err) {
      res.status(401).json("Only authenticated user can delete the post");
    }
  } else {
    res.statuss(404).json("No Posts Found");
  }
});

// Get All Post
router.get("/", async (req, res) => {
  const username = req.query.user;
  const category = req.query.category;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        category: {
          $in: [category],
        },
      });
    } else {
      res.status(401).json("No User Found");
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status("No Post Found");
  }
});

module.exports = router;
