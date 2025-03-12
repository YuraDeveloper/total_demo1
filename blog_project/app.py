from flask import Flask, render_template, jsonify # type: ignore
import json

app = Flask(__name__)

# Load blog posts from JSON file
def load_posts():
    with open("blog.json", "r", encoding="utf-8") as file:
        return json.load(file)

@app.route("/")
def home():
    posts = load_posts()
    return render_template("blog.html", posts=posts)

@app.route("/post/<int:post_id>")
def post_detail(post_id):
    posts = load_posts()
    post = next((p for p in posts if p["id"] == post_id), None)
    if not post:
        return "Post not found", 404
    return render_template("post.html", post=post)

if __name__ == "__main__":
    app.run(debug=True)
