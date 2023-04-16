from flask import Flask, request, jsonify
from flask_cors import CORS
from keybert import KeyBERT


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello from AcademIQ!'

@app.route('/api/process',methods=['POST'])
def predict():
    data = request.json['data']
    text = data['text']
    print("this is the article text")
    print("--------------------------")
    print(text)

    kw_model = KeyBERT()
    keywords = kw_model.extract_keywords(text)
    print(kw_model.extract_keywords(text, keyphrase_ngram_range=(1, 1), stop_words=None))

    # dic = {"search query": str(keywords)}

    return jsonify(keywords)
