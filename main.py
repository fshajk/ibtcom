import os

from flask import Flask, render_template, request, redirect, jsonify

import data.db_session as db_session
from data.__all_models import *

app = Flask(__name__)

app.config['SECRET_KEY'] = 'wkgyi_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///store.db'
app.jinja_env.globals.update(request=request)


@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')


@app.route("/offer")
def offer():
    return render_template('offer.html')


@app.route("/po")
def po():
    return render_template('po.html')


@app.route("/install")
def install():
    return render_template('install.html')


@app.route("/partners")
def partners():
    return render_template('partners.html')


@app.route("/questions")
def questions():
    return render_template('questions.html')


@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        if 'agreement' not in request.form:
            return "Необходимо согласие с политикой", 400
        mail = Mail(
            name=request.form.get('name', "Error!"),
            phone=request.form.get('phone', "Error!"),
            email=request.form.get('email', "Error!"),
            submission_reason=request.form.get('submission_reason', "Error!"),
            comment=request.form.get('comment', '-')
        )
        session = db_session.create_session()
        session.add(mail)
        session.commit()
        session.close()
        return jsonify(success=True)


@app.route('/mails')
def mail_list():
    session = db_session.create_session()
    mails = session.query(Mail).order_by(Mail.time.desc()).all()
    session.close()
    return render_template('additional/mails.html', mails=mails)


@app.route('/mails/delete/<int:mail_id>')
def delete_mail(mail_id):
    session = db_session.create_session()
    mail = session.query(Mail).filter(Mail.id == mail_id).first()
    if mail:
        session.delete(mail)
        session.commit()
    session.close()
    return redirect("/mails")


def main():
    db_file = os.path.join(os.path.dirname(__file__), 'db/ibtcom.db')
    if not os.path.exists(db_file):
        print(f"Файл базы данных не найден: {db_file}")
    db_session.global_init(db_file)
    app.run(port=8000, host='127.0.0.1')


if __name__ == '__main__':
    main()
