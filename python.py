from flask import Flask, render_template

app = Flask(__name__)
app.static_folder='static'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/work.html')
def work():
    return render_template('work.html')

@app.route('/education.html')
def education():
    return render_template('education.html')

if __name__ == '__main__':
    app.run(debug=True)
