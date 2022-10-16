import os
from flask import Flask, current_app, send_from_directory

app = Flask(__name__, static_folder="../dist", static_url_path="/dist")


@app.route("/")
def index():
    return current_app.send_static_file("index.html")


@app.route("/portfolio")
def portfolio():
    return current_app.send_static_file("portfolio/index.html")


@app.route("/<path:path>")
def send_static(path):
    return send_from_directory("../dist", path)


if __name__ == "__main__":
    app.run(debug=False, port=os.getenv("PORT", default=5000), host="0.0.0.0")
