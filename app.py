from flask import Flask, render_template # type: ignore

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/snake')
def snake():
    return render_template('snake.html')

@app.route('/tictactoe')
def tictactoe():
    return render_template('tictactoe.html')

if __name__ == '__main__':
    app.run(debug=True)
