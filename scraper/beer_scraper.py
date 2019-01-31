import requests
from bs4 import BeautifulSoup

from collections import defaultdict
from functools import reduce
import re
import json


def get_url(file_name):
    return "https://www.bjcp.org/2008styles/{}".format(file_name)


def merge(dict1, dict2):
    return {**dict1, **dict2}


def parse_html(file_name):
    url = get_url(file_name)
    r = requests.get(url)
    return BeautifulSoup(r.text, "html.parser")


bs = parse_html("catdex.php")
target_pages = bs.find_all("a", href=re.compile(r"style\d+"))

data = defaultdict(dict)
for page in target_pages:
    bs = parse_html(page["href"])

    category_id, category_name = [
        text.strip() for text in bs.find("h2").text.split("—")
    ]

    stats = [
        elem.text.strip() for elem in bs.find_all("td")
        if "Vital" not in elem.text
    ]

    stats = [{
        elem.split(":")[0]: elem.split(":")[1].replace("–", "-").strip()
    } for elem in stats]

    stats_transformed = []

    for i in range(int(len(stats) / 5)):
        sliced_stats = stats[i * 5:(i + 1) * 5]
        stats_dict = reduce(merge, sliced_stats)

        stats_dict = merge(
            stats_dict, {"name": bs.find_all("h2")[i + 1].text.strip()}
        )
        stats_transformed.append(stats_dict)

        data[category_name]["data"] = stats_transformed
        data[category_name]["id"] = category_id

with open("data.js", "w") as fout:
    json.dump(data, fout)
