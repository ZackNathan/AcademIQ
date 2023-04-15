from flask import Flask, request, jsonify
from flask_cors import CORS
from pathlib import Path
from rake_nltk import Rake
import io
import numpy as np
import json


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello from AcademIQ!'

@app.route('/api/process',methods=['POST'])
def predict():
    data = json.loads(request.json)

    print(data['text'])
    text = data['text']

    # keyword extraction
    r = Rake()
    r.extract_keywords_from_text(text)
    keywords = r.get_ranked_phrases_with_scores()

    #     dic = {"img": str(classes[classification])}
    #     dic = {"img": str('not')}
    dic = {"search query": str(keywords)}
    
    return jsonify(dic)
