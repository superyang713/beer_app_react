import requests
from bs4 import BeautifulSoup

from collections import defaultdict, namedtuple
import re
import json

fields = [
    "category", "name", "id", "OG_min", "OG_max", "FG_min", "FG_max",
    "IBU_min", "IBU_max", "SRM_min", "SRM_max", "ABV_min", "ABV_max"
]
Beer = namedtuple("beer", fields)


def get_url(file_name):
    return "https://www.bjcp.org/styles04/{}".format(file_name)


def merge(dict1, dict2):
    return {**dict1, **dict2}


def parse_html(file_name):
    url = get_url(file_name)
    r = requests.get(url)
    return BeautifulSoup(r.text, "html.parser")


bs = parse_html("")
target_pages = bs.find_all("a", href=re.compile(r"Category\d+"))

data = defaultdict(list)
for page in target_pages:
    bs = parse_html(page["href"])

    stats = [elem.text.strip() for elem in bs.find_all("td")]
    stats = list(
        filter((lambda x: re.match(r"\d+", x[0]) or re.match(r"^-$", x[0])),
               stats))
    stats = [
        elem.replace("-", "9999 - 9999") if elem == "-" else elem
        for elem in stats
    ]
    stats = [elem.split("-") for elem in stats]
    stats = [re.findall(r"\d*\.*\d+", num) for m in stats for num in m]
    stats = [float(num) for elem in stats for num in elem]

    for i in range(int(len(stats) / 10)):
        id, name = [
            elem.strip() for elem in bs.find_all("h3")[i].text.split(".")
        ]
        OG_min = stats[i * 10]
        OG_max = stats[i * 10 + 1]
        FG_min = stats[i * 10 + 2]
        FG_max = stats[i * 10 + 3]
        IBU_min = stats[i * 10 + 4]
        IBU_max = stats[i * 10 + 5]
        SRM_min = stats[i * 10 + 6]
        SRM_max = stats[i * 10 + 7]
        ABV_min = stats[i * 10 + 8]
        ABV_max = stats[i * 10 + 9]
        try:
            category = bs.find("div", {"id": "main"})\
                              .find("h1")\
                              .text.split(".")[1].strip()
        except AttributeError:
            category = None

        beer = Beer(
            category=category,
            name=name,
            id=id,
            OG_min=OG_min,
            OG_max=OG_max,
            FG_min=FG_min,
            FG_max=FG_max,
            IBU_min=IBU_min,
            IBU_max=IBU_max,
            SRM_min=SRM_min,
            SRM_max=SRM_max,
            ABV_min=ABV_min,
            ABV_max=ABV_max)

        data["beer"].append(beer._asdict())

with open("data.js", "w") as fout:
    json.dump(data, fout)
