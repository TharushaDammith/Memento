from flask import Flask, render_template


app = Flask(__name__)
app.config['SECRET_KEY'] = "WEsodksniewJK"


@app.route('/')
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/sign-up")
def sign_up():
    return render_template("sign-up.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/settings")
def settings():
    return render_template("settings.html")


@app.route("/notes")
def notes():
    return render_template("notes.html")


@app.route("/calender")
def calender():
    return render_template("calender.html")


@app.route("/log_out")
def log_out():
    return "Log out"


if __name__ == "__main__":
    app.run(debug=True)
