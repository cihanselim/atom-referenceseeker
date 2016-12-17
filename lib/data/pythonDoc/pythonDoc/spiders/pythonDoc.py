from scrapy.spiders import Spider
from .. import items
from scrapy.http import Request

class MySpider(Spider):
    name = "pythonDoc"
    allowed_domains = ["docs.python.org"]
    start_urls  = ["https://docs.python.org/2.7/reference/index.html"]

    # to access responsible page
    def parse(self, response):
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36'}
        url = response.url
        ref_links = response.css("li.toctree-l1 > ul > li > a::attr(href)").extract()
        for link in ref_links:
            yield Request(link, self.parse1)

    # getting data
    def parse1(self, response):
        item['title'] = response.css("head > title:nth-child(2)::text").extract()
        item['name'] = response.url.split('/')[-1].split('.')[0]
        item['link'] = response.url
