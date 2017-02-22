# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class PydocumentItem(scrapy.Item):
    # define the fields for your item here like:
    title = scrapy.Field()
    name = scrapy.Field()
    url = scrapy.Field()
    h2 = scrapy.Field()
    h2name = scrapy.Field()
    h3 = scrapy.Field()
    h3name = scrapy.Field()
    h4 = scrapy.Field()
    h4name = scrapy.Field()
