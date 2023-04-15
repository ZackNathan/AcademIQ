from flask import Flask, request, jsonify
from flask_cors import CORS
from pathlib import Path
from rake_nltk import Rake
import io
import numpy as np
import json
from keybert import KeyBERT


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

    #Redefine text for testing purposes
    text = """
    Supervised learning is the machine learning task of learning a function that
    maps an input to an output based on example input-output pairs. It infers a
    function from labeled training data consisting of a set of training examples.
    In supervised learning, each example is a pair consisting of an input object
    (typically a vector) and a desired output value (also called the supervisory signal). 
    A supervised learning algorithm analyzes the training data and produces an inferred function, 
    which can be used for mapping new examples. An optimal scenario will allow for the 
    algorithm to correctly determine the class labels for unseen instances. This requires 
    the learning algorithm to generalize from the training data to unseen situations in a 
    'reasonable' way (see inductive bias).
    """


    kw_model - KeyBERT()
    keywords = kw_model.extract_keywords(text)
    print(kw_model.extract_keywords(doc, keyphrase_ngram_range=(1, 1), stop_words=None))


    
    # keyword extraction
    # r = Rake()
    # r.extract_keywords_from_text(text)
    # keywords = r.get_ranked_phrases_with_scores()

    # #     dic = {"img": str(classes[classification])}
    # #     dic = {"img": str('not')}
    # dic = {"search query": str(keywords)}
    
    return jsonify(keywords)
