document.addEventListener("DOMContentLoaded", function () {
    fetch("/blogs/blog-posts.json") // JSON file path
      .then((response) => response.json())
      .then((data) => {
        // Assuming you want to display the first blog post from the JSON
        const blogPost = data[0];

        // Fill the template blog page with data from the JSON
        document.getElementById("blog-title").innerText = blogPost.title;
        document.getElementById(
          "blog-date"
        ).innerText = `Published on ${blogPost.date}`;
        document.getElementById("blog-image").src = blogPost.image;
        document.getElementById("blog-image").alt = blogPost.alt;

        // Update the title of the webpage with the blog post title
        document.title = blogPost.title;
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  });