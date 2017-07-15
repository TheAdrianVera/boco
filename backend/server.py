from flask import Flask, jsonify
from yelpapi import YelpAPI
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

yelp_api = YelpAPI("DMlBusLmWPtMSDP3NCJY9g", "wkx6RLNDmnaMYMvVTeclCtWZADlv2XnmCW19eTwVSw77MnXUl4KDp12RHGwBL1y8")

@app.route("/")
def hello():
	return "Hello world!"

@app.route("/food/<mylocation>")
def show_restaurant(mylocation):
	search_results = yelp_api.search_query(term='food' ,location=mylocation)
	results = search_results['businesses']
	
	try:
		return jsonify(search_results["businesses"])
	except:
		return "No results :("
