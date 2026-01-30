let posts = [];
let nextId = 1;

function getAllPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find(post => post.id === id);
}

function createPost(title, content, author) {
  const newPost = {
    id: nextId++,
    title,
    content,
    author,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  posts.push(newPost);
  return newPost;
}

function updatePost(id, data) {
  const post = getPostById(id);
  if (!post) return null;

  if (data.title) post.title = data.title;
  if (data.content) post.content = data.content;
  if (data.author) post.author = data.author;

  post.updatedAt = new Date();
  return post;
}

function deletePost(id) {
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return null;

  return posts.splice(index, 1)[0];
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};