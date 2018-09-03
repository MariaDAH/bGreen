import os
from flask import Flask, render_template
app = Flask(__name__)

'''@app.route('/')
def hello_world():
    return 'Hello, World!'''


@app.route('/')
def cover():
    return render_template("cover.html", page_title="Cover")

if __name__=='__main__':
  app.run(host=os.getenv('IP'),port=int(os.getenv('PORT')), debug = True)
'''app.run(host=os.getenv('IP'),port=os.getenv('PORT'), debug = True)'''
