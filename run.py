import os
from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
  return render_template("index.html", page_title="Index")

@app.route('/cover')
def cover():
  return render_template("cover.html", page_title="Cover")

@app.route('/home')
def home():
  return render_template("home.html", page_title="Home")

@app.route('/default')
def default():
  return render_template("default.html", page_title="Default")

@app.route('/policies')
def policies():
  return render_template("policies.html", page_title="Policy")

@app.route('/aboutus')
def abotus():
  return render_template("aboutus.html", page_title="About")

@app.route('/faqs')
def faqs():
  return render_template("faqs.html", page_title="FAQ's")

@app.route('/mission')
def mission():
  return render_template("mission.html", page_title="Mission")

@app.route('/news')
def news():
  return render_template("news.html", page_title="News")

@app.route('/projects')
def projects():
  return render_template("projects.html", page_title="Projects")


if __name__=='__main__':
  app.run(host=os.getenv('IP'),port=int(os.getenv('PORT')), debug = True)

