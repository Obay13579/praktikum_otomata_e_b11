from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def is_palindrome(s):
    return s == s[::-1]

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        text = request.form.get('text')
        result = is_palindrome(text)
        return jsonify({'result': result})
    return render_template('main.html')

if __name__ == '__main__':
    app.run(debug=True)
