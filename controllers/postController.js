const store = require("../Data/postStore");

exports.createPost = (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({
      message: "Title, content and author are required"
    });
  }

  const post = store.createPost(title, content, author);

  res.status(201).json({
    message: "Post created",
    post
  });
};

exports.getAllPosts = (req, res) => {
  res.json(store.getAllPosts());
};

exports.getSinglePost = (req, res) => {
  const post = store.getPostById(parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};

exports.updatePost = (req, res) => {
  const post = store.updatePost(
    parseInt(req.params.id),
    req.body
  );

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json({
    message: "Post updated",
    post
  });
};

exports.deletePost = (req, res) => {
  const post = store.deletePost(parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json({
    message: "Post deleted",
    post
  });
};