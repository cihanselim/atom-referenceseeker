# -*- coding: utf-8 -*-

import scrapy

class pythondocItem(scrapy.Item):
    # defining items
    title = scrapy.Field()
    name = scrapy.Field()
    link = scrapy.Field()
