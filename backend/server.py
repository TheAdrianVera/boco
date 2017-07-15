from flask import Flask
from yelpapi import YelpAPI
import json
app = Flask(__name__)

yelp_api = YelpAPI("DMlBusLmWPtMSDP3NCJY9g", "wkx6RLNDmnaMYMvVTeclCtWZADlv2XnmCW19eTwVSw77MnXUl4KDp12RHGwBL1y8")

@app.route("/")
def hello():
	return "Hello world!"

@app.route("/food/<mylocation>")
def show_restaurant(mylocation):
	search_results = yelp_api.search_query(term='food' ,location=mylocation)
	results = search_results['businesses']
	
	try:
		test = map(lambda elem: elem['name'], results)
		l = str(list(test))
		return l
	except:
		return "No results :("
