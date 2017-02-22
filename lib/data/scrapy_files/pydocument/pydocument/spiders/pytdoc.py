# -*- coding: utf-8 -*-

import scrapy, sys, re
sys.path.insert(0, '/home/mkocaker/Desktop/pydocument/pydocument/')
from items import PydocumentItem
from scrapy import Request


class DocSpider(scrapy.Spider):
    name = "pytdoc"
    start_urls = [
        'https://docs.python.org/2/reference/index.html'
    ]
    def parse(self, response):
        items = []
        base_url = "https://docs.python.org/2/reference/%s"
        urls = response.css('li.toctree-l1 > a::attr(href)').extract()
        for i in range(len(urls)):
            # print (base_url % item['url'][i])
            yield Request(base_url % urls[i], self.parse2)

    def parse2(self, response):
        item = PydocumentItem()
        item['title'] = response.css('head > title::text').extract()
        #item['name'] = [name.split('\u2014')[0] for name in item['title']]
        item['url'] = response.url

        h2_links= response.css('div > h2 > a::attr(href)').extract()
        itemsforh2 = []
        for h2_link in h2_links:
            if not h2_link.split('#')[0]:
                name = h2_link.replace('#','').replace('-', ' ')
                itemsforh2.append([{'result': [{'name': name,'url': h2_link}]}])
        item['h2'] = itemsforh2
        h3_links= response.css('div > h3 > a::attr(href)').extract()

        itemsforh3 = []
        for h3_link in h3_links:
            if not h3_link.split('#')[0]:
                name = h3_link.replace('#','').replace('-', ' ')
                itemsforh3.append([{'result': [{'name': name,'url': h3_link}]}])
        item['h3'] = itemsforh3
        h4_links= response.css('div > h4 > a::attr(href)').extract()

        itemsforh4 = []
        for h4_link in h4_links:
            if not h4_link.split('#')[0]:
                name = h4_link.replace('#','').replace('-', ' ')
                itemsforh4.append([{'result': [{'name': name,'url': h4_link}]}])
        item['h4'] = itemsforh4
        return item
