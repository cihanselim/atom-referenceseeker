import json

def parser(lst,title,urll):
	result_lst = []
	for l in lst:
		result = l[0]['result'][0]
		name = result['name']
		url = urll + result['url']
		title = title
		result_lst.append({
			'title': title,
			'name': name,
			'url': url
		})
	# print json.dumps(result_lst, indent=4)
	return result_lst


with open('pytdoc.json', 'r') as f:
	content = json.loads(f.read())

final_dict = []
for con in content:
	name = con['name'][0].split(u'\u2014')[0].split('.')[1].strip()
	title = con['title'][0].replace(u'\u2014', "-")
	url = con['url']
	final_dict.append({
		'title': title,
		'name': name,
		'url': url
	})
	final_dict += parser(con['h2'],title,url) if len(con['h2']) > 0 else []
	final_dict += parser(con['h3'],title,url) if len(con['h3']) > 0 else []
	final_dict += parser(con['h4'],title,url) if len(con['h4']) > 0 else []

with open('pythonDoc.json', 'w') as fh:
	fh.write(json.dumps(final_dict))
#print content
