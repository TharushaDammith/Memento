from flask import Flask, render_template, request, redirect, url_for, flash
from flask_login import LoginManager, login_user, login_required, UserMixin, logout_user, current_user
from flask_sqlalchemy import SQLAlchemy
import random
from send_mail import SendMail
from sqlalchemy.exc import IntegrityError
from string import ascii_lowercase
from werkzeug.security import generate_password_hash, check_password_hash


def generate_verification_key(user):
    key_len = random.choice([n for n in range(10, 20)])
    key = ""
    for i in range(key_len):
        key += random.choice(ascii_lowercase)

    new_verification = VerifyEmail(
        user=user,
        key=key
    )

    db.session.add(new_verification)
    db.session.commit()


app = Flask(__name__)
db = SQLAlchemy()
app.config["SECRET_KEY"] = "ErjtrKRJEewewLke"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)


class User(UserMixin, db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=True, nullable=False)
    email = db.Column(db.String(250), nullable=False)
    password = db.Column(db.String(250), nullable=False)
    verification = db.relationship("VerifyEmail", back_populates="user")


class VerifyEmail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    status = db.Column(db.Boolean, default=False, nullable=False)
    key = db.Column(db.String, nullable=False)
    user = db.relationship("User", back_populates="verification")


with app.app_context():
    db.create_all()


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.route('/')
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        user = User.query.filter_by(email=email).first()
        if user:
            password_is_correct = check_password_hash(
                pwhash=user.password,
                password=password
            )
            if password_is_correct:
                login_user(user)
                return redirect(url_for("dashboard"))
            else:
                flash("")
                flash("Incorrect password")
        else:
            flash("Email doesn't exist")
            flash("")

    return render_template("login.html")


@app.route("/sign-up", methods=["GET", "POST"])
def sign_up():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        password = request.form["password"]

        new_user = User(
            name=name,
            email=email,
            password=generate_password_hash(
                password=password,
                salt_length=8
            )
        )

        try:
            db.session.add(new_user)
            db.session.commit()
        except IntegrityError:
            flash("This email already exists.")
            return redirect(url_for("sign_up"))

        generate_verification_key(new_user)

        verify = VerifyEmail.query.filter_by(user_id=new_user.id).first()
        link = f"{request.url_root}verify_email?id={verify.id}&key={verify.key}"
        send_mail = SendMail(link, "tharushadgunawardane@gmail.com", new_user.name)
        send_mail.send_msg()

        login_user(new_user)

        return redirect(url_for("dashboard"))

    return render_template("sign-up.html")


@app.route("/verify_email")
def verify_email():
    user_id = request.args["id"]
    key = request.args["key"]

    verify = VerifyEmail.query.get(user_id)
    if verify:
        if verify.key == key:
            verify.status = True
            db.session.commit()

            return "Success"
        else:
            return "Invalid key"

    return redirect(url_for("sign_up"))


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/settings")
@login_required
def settings():
    return render_template("settings.html")


@app.route("/notes")
@login_required
def notes():
    return render_template("notes.html")


@app.route("/calender")
@login_required
def calender():
    return render_template("calender.html")


@app.route("/log_out")
def log_out():
    logout_user()
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(debug=True)
