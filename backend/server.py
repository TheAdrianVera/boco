from flask import Flask, jsonify
from yelpapi import YelpAPI
import json
import copy
import sqlite3

from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

yelp_api = YelpAPI("DMlBusLmWPtMSDP3NCJY9g", "wkx6RLNDmnaMYMvVTeclCtWZADlv2XnmCW19eTwVSw77MnXUl4KDp12RHGwBL1y8")

@app.route("/")
def hello():
	return "Hello world!"

@app.route("/food/<mylocation>")
def show_restaurant(mylocation):
	search_results = yelp_api.search_query(term='black owned restaurants' ,location=mylocation)
	results = search_results['businesses']
	data = {}
	businesses_array = []

	conn = sqlite3.connect('theBase.db')
	c = conn.cursor()

	for x in range(0, len(search_results['businesses'])):

		data['name'] = search_results['businesses'][x]['name']
		data['image'] = search_results['businesses'][x]['image_url']
		data['category'] = search_results['businesses'][x]['categories'][0]['title']
		data['rating'] = search_results['businesses'][x]['rating']
		data['price'] = search_results['businesses'][x]['price']

		businesses_array.append(data)
		
		c.execute('INSERT INTO latinxFood (name, image, category, rating, price) VALUES (:name, :image, :category, :rating, :price);', data)

	#c = conn.cursor()
	selection = c.execute('SELECT * FROM latinxFood')
	for item in selection:
		print (item)

	conn.commit()

	try:
		return jsonify(search_results["businesses"])
	except:
		return "No results :("

