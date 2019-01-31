const beerData = {
    "Light Lager": {
        "data": [
            {
                "OG": "1.028 - 1.040",
                "IBUs": "8 - 12",
                "FG": "0.998 - 1.008",
                "SRM": "2 - 3",
                "ABV": "2.8 - 4.2%",
                "name": "1A. Lite American Lager"
            },
            {
                "OG": "1.040 - 1.050",
                "IBUs": "8 - 15",
                "FG": "1.004 - 1.010",
                "SRM": "2 - 4",
                "ABV": "4.2 - 5.3%",
                "name": "1B. Standard American Lager"
            },
            {
                "OG": "1.046 - 1.056",
                "IBUs": "15 - 25",
                "FG": "1.008 - 1.012",
                "SRM": "2 - 6",
                "ABV": "4.6 - 6%",
                "name": "1C. Premium American Lager"
            },
            {
                "OG": "1.045 - 1.051",
                "IBUs": "16 - 22",
                "FG": "1.008 - 1.012",
                "SRM": "3 - 5",
                "ABV": "4.7 - 5.4%",
                "name": "1D. Munich Helles"
            },
            {
                "OG": "1.048 - 1.056",
                "IBUs": "23 - 30",
                "FG": "1.010 - 1.015",
                "SRM": "4 - 6",
                "ABV": "4.8 - 6.0%",
                "name": "1E. Dortmunder Export"
            }
        ],
        "id": "Category 1"
    },
    "Pilsner": {
        "data": [
            {
                "OG": "1.044 - 1.050",
                "IBUs": "25 - 45",
                "FG": "1.008 - 1.013",
                "SRM": "2 - 5",
                "ABV": "4.4 - 5.2%",
                "name": "2A. German Pilsner (Pils)"
            },
            {
                "OG": "1.044 - 1.056",
                "IBUs": "35 - 45",
                "FG": "1.013 - 1.017",
                "SRM": "3.5 - 6",
                "ABV": "4.2 - 5.4%",
                "name": "2B. Bohemian Pilsener"
            },
            {
                "OG": "1.044 - 1.060",
                "IBUs": "25 - 40",
                "FG": "1.010 - 1.015",
                "SRM": "3 - 6",
                "ABV": "4.5 - 6%",
                "name": "2C. Classic American Pilsner"
            }
        ],
        "id": "Category 2"
    },
    "European Amber Lager": {
        "data": [
            {
                "OG": "1.046 - 1.052",
                "IBUs": "18 - 30",
                "FG": "1.010 - 1.014",
                "SRM": "10 - 16",
                "ABV": "4.5 - 5.5%",
                "name": "3A. Vienna Lager"
            },
            {
                "OG": "1.050 - 1.057",
                "IBUs": "20 - 28",
                "FG": "1.012 - 1.016",
                "SRM": "7 - 14",
                "ABV": "4.8 - 5.7%",
                "name": "3B. Oktoberfest"
            }
        ],
        "id": "Category 3"
    },
    "Dark Lager": {
        "data": [
            {
                "OG": "1.044 - 1.056",
                "IBUs": "8 - 20",
                "FG": "1.008 - 1.012",
                "SRM": "14 - 22",
                "ABV": "4.2 - 6%",
                "name": "4A. Dark American Lager"
            },
            {
                "OG": "1.048 - 1.056",
                "IBUs": "18 - 28",
                "FG": "1.010 - 1.016",
                "SRM": "14 - 28",
                "ABV": "4.5 - 5.6%",
                "name": "4B. Munich Dunkel"
            },
            {
                "OG": "1.046 - 1.052",
                "IBUs": "22 - 32",
                "FG": "1.010 - 1.016",
                "SRM": "17 - 30",
                "ABV": "4.4 - 5.4%",
                "name": "4C. Schwarzbier (Black Beer)"
            }
        ],
        "id": "Category 4"
    },
    "Bock": {
        "data": [
            {
                "OG": "1.064 - 1.072",
                "IBUs": "23 - 35",
                "FG": "1.011 - 1.018",
                "SRM": "6 - 11",
                "ABV": "6.3 - 7.4%",
                "name": "5A. Maibock/Helles Bock"
            },
            {
                "OG": "1.064 - 1.072",
                "IBUs": "20 - 27",
                "FG": "1.013 - 1.019",
                "SRM": "14 - 22",
                "ABV": "6.3 - 7.2%",
                "name": "5B. Traditional Bock"
            },
            {
                "OG": "1.072 - 1.112",
                "IBUs": "16 - 26",
                "FG": "1.016 - 1.024",
                "SRM": "6 - 25",
                "ABV": "7 - 10%",
                "name": "5C. Doppelbock"
            },
            {
                "OG": "1.078 - 1.120",
                "IBUs": "25 - 35",
                "FG": "1.020 - 1.035",
                "SRM": "18 - 30",
                "ABV": "9 - 14%",
                "name": "5D. Eisbock"
            }
        ],
        "id": "Category 5"
    },
    "Light Hybrid Beer": {
        "data": [
            {
                "OG": "1.042 - 1.055",
                "IBUs": "15 - 20",
                "FG": "1.006 - 1.012",
                "SRM": "2.5 - 5",
                "ABV": "4.2- 5.6%",
                "name": "6A. Cream Ale"
            },
            {
                "OG": "1.038 - 1.054",
                "IBUs": "15 - 28",
                "FG": "1.008 - 1.013",
                "SRM": "3 - 6",
                "ABV": "3.8 - 5.5%",
                "name": "6B. Blonde Ale"
            },
            {
                "OG": "1.044 - 1.050",
                "IBUs": "20 - 30",
                "FG": "1.007 - 1.011",
                "SRM": "3.5 - 5",
                "ABV": "4.4 - 5.2%",
                "name": "6C. K\u00f6lsch"
            },
            {
                "OG": "1.040 - 1.055",
                "IBUs": "15 - 30",
                "FG": "1.008 - 1.013",
                "SRM": "3 - 6",
                "ABV": "4 - 5.5%",
                "name": "6D. American Wheat or Rye Beer"
            }
        ],
        "id": "Category 6"
    },
    "Amber Hybrid Beer": {
        "data": [
            {
                "OG": "1.046 - 1.054",
                "IBUs": "25 - 40",
                "FG": "1.010 - 1.015",
                "SRM": "13 - 19",
                "ABV": "4.5 - 5.2%",
                "name": "7A. Northern German Altbier"
            },
            {
                "OG": "1.048 - 1.054",
                "IBUs": "30 - 45",
                "FG": "1.011 - 1.014",
                "SRM": "10 - 14",
                "ABV": "4.5 - 5.5%",
                "name": "7B. California Common Beer"
            },
            {
                "OG": "1.046 - 1.054",
                "IBUs": "35 - 50",
                "FG": "1.010 - 1.015",
                "SRM": "11 - 17",
                "ABV": "4.5 - 5.2%",
                "name": "7C. D\u00fcsseldorf Altbier"
            }
        ],
        "id": "Category 7"
    },
    "English Pale Ale": {
        "data": [
            {
                "OG": "1.032 - 1.040",
                "IBUs": "25 - 35",
                "FG": "1.007 - 1.011",
                "SRM": "4 - 14",
                "ABV": "3.2 - 3.8%",
                "name": "8A. Standard/Ordinary Bitter"
            },
            {
                "OG": "1.040 - 1.048",
                "IBUs": "25 - 40",
                "FG": "1.008 - 1.012",
                "SRM": "5 - 16",
                "ABV": "3.8 - 4.6%",
                "name": "8B. Special/Best/Premium Bitter"
            },
            {
                "OG": "1.048 - 1.060",
                "IBUs": "30 - 50",
                "FG": "1.010 - 1.016",
                "SRM": "6 - 18",
                "ABV": "4.6 - 6.2%",
                "name": "8C. Extra Special/Strong Bitter (English Pale Ale)"
            }
        ],
        "id": "Category 8"
    },
    "Scottish and Irish Ale": {
        "data": [
            {
                "OG": "1.030 - 1.035",
                "IBUs": "10 - 20",
                "FG": "1.010 - 1.013",
                "SRM": "9 - 17",
                "ABV": "2.5 - 3.2%",
                "name": "9A. Scottish Light 60/-"
            },
            {
                "OG": "1.035 - 1.040",
                "IBUs": "10 - 25",
                "FG": "1.010 - 1.015",
                "SRM": "9 - 17",
                "ABV": "3.2 - 3.9%",
                "name": "9B. Scottish Heavy 70/-"
            },
            {
                "OG": "1.040 - 1.054",
                "IBUs": "15 - 30",
                "FG": "1.010 - 1.016",
                "SRM": "9 - 17",
                "ABV": "3.9 - 5.0%",
                "name": "9C. Scottish Export 80/-"
            },
            {
                "OG": "1.044 - 1.060",
                "IBUs": "17 - 28",
                "FG": "1.010 - 1.014",
                "SRM": "9 - 18",
                "ABV": "4.0 - 6.0%",
                "name": "9D. Irish Red Ale"
            },
            {
                "OG": "1.070 - 1.130",
                "IBUs": "17 - 35",
                "FG": "1.018 - 1.056",
                "SRM": "14 - 25",
                "ABV": "6.5 - 10%",
                "name": "9E. Strong Scotch Ale"
            }
        ],
        "id": "Category 9"
    },
    "American Ale": {
        "data": [
            {
                "OG": "1.045 - 1.060",
                "IBUs": "30 - 45",
                "FG": "1.010 - 1.015",
                "SRM": "5 - 14",
                "ABV": "4.5 - 6.2%",
                "name": "10A. American Pale Ale"
            },
            {
                "OG": "1.045 - 1.060",
                "IBUs": "25 - 40",
                "FG": "1.010 - 1.015",
                "SRM": "10 - 17",
                "ABV": "4.5 - 6.2%",
                "name": "10B. American Amber Ale"
            },
            {
                "OG": "1.045 - 1.060",
                "IBUs": "20 - 40",
                "FG": "1.010 - 1.016",
                "SRM": "18 - 35",
                "ABV": "4.3 - 6.2%",
                "name": "10C. American Brown Ale"
            }
        ],
        "id": "Category 10"
    },
    "English Brown Ale": {
        "data": [
            {
                "OG": "1.030 - 1.038",
                "IBUs": "10 - 25",
                "FG": "1.008 - 1.013",
                "SRM": "12 - 25",
                "ABV": "2.8 - 4.5%",
                "name": "11A. Mild"
            },
            {
                "OG": "1.033 - 1.042",
                "IBUs": "12 - 20",
                "FG": "1.011 - 1.014",
                "SRM": "19 - 35",
                "ABV": "2.8 - 4.1%",
                "name": "11B. Southern English Brown"
            },
            {
                "OG": "1.040 - 1.052",
                "IBUs": "20 - 30",
                "FG": "1.008 - 1.013",
                "SRM": "12 - 22",
                "ABV": "4.2 - 5.4%",
                "name": "11C. Northern English Brown"
            }
        ],
        "id": "Category 11"
    },
    "Porter": {
        "data": [
            {
                "OG": "1.040 - 1.052",
                "IBUs": "18 - 35",
                "FG": "1.008 - 1.014",
                "SRM": "20 - 30",
                "ABV": "4 - 5.4%",
                "name": "12A. Brown Porter"
            },
            {
                "OG": "1.048 - 1.065",
                "IBUs": "25 - 50",
                "FG": "1.012 - 1.016",
                "SRM": "22 - 35",
                "ABV": "4.8 - 6.5%",
                "name": "12B. Robust Porter"
            },
            {
                "OG": "1.060 - 1.090",
                "IBUs": "20 - 40",
                "FG": "1.016 - 1.024",
                "SRM": "17 - 30",
                "ABV": "5.5 - 9.5%",
                "name": "12C. Baltic Porter"
            }
        ],
        "id": "Category 12"
    },
    "Stout": {
        "data": [
            {
                "OG": "1.036 - 1.050",
                "IBUs": "30 - 45",
                "FG": "1.007 - 1.011",
                "SRM": "25 - 40",
                "ABV": "4 - 5%",
                "name": "13A. Dry Stout"
            },
            {
                "OG": "1.044 - 1.060",
                "IBUs": "20 - 40",
                "FG": "1.012 - 1.024",
                "SRM": "30 - 40",
                "ABV": "4 - 6%",
                "name": "13B. Sweet Stout"
            },
            {
                "OG": "1.048 - 1.065",
                "IBUs": "25 - 40",
                "FG": "1.010 - 1.018",
                "SRM": "22 - 40",
                "ABV": "4.2 - 5.9%",
                "name": "13C. Oatmeal Stout"
            },
            {
                "OG": "1.056 - 1.075",
                "IBUs": "30 - 70",
                "FG": "1.010 - 1.018",
                "SRM": "30 - 40",
                "ABV": "5.5 - 8%",
                "name": "13D. Foreign Extra Stout"
            },
            {
                "OG": "1.050 - 1.075",
                "IBUs": "35 - 75",
                "FG": "1.010 - 1.022",
                "SRM": "30 - 40",
                "ABV": "5 - 7%",
                "name": "13E. American Stout"
            },
            {
                "OG": "1.075 - 1.115",
                "IBUs": "50 - 90",
                "FG": "1.018 - 1.030",
                "SRM": "30 - 40",
                "ABV": "8 - 12%",
                "name": "13F. Russian Imperial Stout"
            }
        ],
        "id": "Category 13"
    },
    "India Pale Ale (IPA)": {
        "data": [
            {
                "OG": "1.050 - 1.075",
                "IBUs": "40 - 60",
                "FG": "1.010 - 1.018",
                "SRM": "8 - 14",
                "ABV": "5 - 7.5%",
                "name": "14A. English IPA"
            },
            {
                "OG": "1.056 - 1.075",
                "IBUs": "40 - 70",
                "FG": "1.010 - 1.018",
                "SRM": "6 - 15",
                "ABV": "5.5 - 7.5%",
                "name": "14B. American IPA"
            },
            {
                "OG": "1.070 - 1.090",
                "IBUs": "60 - 120",
                "FG": "1.010 - 1.020",
                "SRM": "8 - 15",
                "ABV": "7.5 - 10%",
                "name": "14C. Imperial IPA"
            }
        ],
        "id": "Category 14"
    },
    "German Wheat and Rye Beer": {
        "data": [
            {
                "OG": "1.044 - 1.052",
                "IBUs": "8 - 15",
                "FG": "1.010 - 1.014",
                "SRM": "2 - 8",
                "ABV": "4.3 - 5.6%",
                "name": "15A. Weizen/Weissbier"
            },
            {
                "OG": "1.044 - 1.056",
                "IBUs": "10 - 18",
                "FG": "1.010 - 1.014",
                "SRM": "14 - 23",
                "ABV": "4.3 - 5.6%",
                "name": "15B. Dunkelweizen"
            },
            {
                "OG": "1.064 - 1.090",
                "IBUs": "15 - 30",
                "FG": "1.015 - 1.022",
                "SRM": "12 - 25",
                "ABV": "6.5 - 8.0%",
                "name": "15C. Weizenbock"
            },
            {
                "OG": "1.046 - 1.056",
                "IBUs": "10 - 20",
                "FG": "1.010 - 1.014",
                "SRM": "14 - 19",
                "ABV": "4.5 - 6%",
                "name": "15D. Roggenbier (German Rye Beer)"
            }
        ],
        "id": "Category 15"
    },
    "Belgian and French Ale": {
        "data": [
            {
                "OG": "1.044 - 1.052",
                "IBUs": "10 - 20",
                "FG": "1.008 - 1.012",
                "SRM": "2 - 4",
                "ABV": "4.5 - 5.5%",
                "name": "16A. Witbier"
            },
            {
                "OG": "1.048 - 1.054",
                "IBUs": "20 - 30",
                "FG": "1.010 - 1.014",
                "SRM": "8 - 14",
                "ABV": "4.8 - 5.5%",
                "name": "16B. Belgian Pale Ale"
            },
            {
                "OG": "1.048 - 1.065",
                "IBUs": "20 - 35",
                "FG": "1.002 - 1.012",
                "SRM": "5 - 14",
                "ABV": "5 - 7%",
                "name": "16C. Saison"
            },
            {
                "OG": "1.060 - 1.080",
                "IBUs": "18 - 28",
                "FG": "1.008 - 1.016",
                "SRM": "6 - 19",
                "ABV": "6 - 8.5%",
                "name": "16D. Bi\u00e8re de Garde"
            },
            {
                "OG": "Varies",
                "IBUs": "Varies",
                "FG": "Varies",
                "SRM": "Varies",
                "ABV": "Varies",
                "name": "16E. Belgian Specialty Ale"
            }
        ],
        "id": "Category 16"
    },
    "Sour Ale": {
        "data": [
            {
                "OG": "1.028 - 1.032",
                "IBUs": "3 - 8",
                "FG": "1.003 - 1.006",
                "SRM": "2 - 3",
                "ABV": "2.8 - 3.8%",
                "name": "17A. Berliner Weisse"
            },
            {
                "OG": "1.048 - 1.057",
                "IBUs": "10 - 25",
                "FG": "1.002 - 1.012",
                "SRM": "10 - 16",
                "ABV": "4.6 - 6.5%",
                "name": "17B. Flanders Red Ale"
            },
            {
                "OG": "1.040 - 1.074",
                "IBUs": "20 - 25",
                "FG": "1.008 - 1.012",
                "SRM": "15 - 22",
                "ABV": "4 - 8%",
                "name": "17C. Flanders Brown Ale/Oud Bruin"
            },
            {
                "OG": "1.040 - 1.054",
                "IBUs": "0 - 10",
                "FG": "1.001 - 1.010",
                "SRM": "3 - 7",
                "ABV": "5 - 6.5%",
                "name": "17D. Straight (Unblended) Lambic"
            },
            {
                "OG": "1.040 - 1.060",
                "IBUs": "0 -  10",
                "FG": "1.000 - 1.006",
                "SRM": "3 - 7",
                "ABV": "5 - 8%",
                "name": "17E. Gueuze"
            },
            {
                "OG": "1.040 - 1.060",
                "IBUs": "0 -  10",
                "FG": "1.000 - 1.010",
                "SRM": "3 - 7 (varies w/ fruit)",
                "ABV": "5 - 7%",
                "name": "17F. Fruit Lambic"
            }
        ],
        "id": "Category 17"
    },
    "Belgian Strong Ale": {
        "data": [
            {
                "OG": "1.062 - 1.075",
                "IBUs": "15 - 30",
                "FG": "1.008 - 1.018",
                "SRM": "4 - 7",
                "ABV": "6 - 7.5%",
                "name": "18A. Belgian Blond Ale"
            },
            {
                "OG": "1.062 - 1.075",
                "IBUs": "15 - 25",
                "FG": "1.008 - 1.018",
                "SRM": "10 - 17",
                "ABV": "6 - 7.6%",
                "name": "18B. Belgian Dubbel"
            },
            {
                "OG": "1.075 - 1.085",
                "IBUs": "20 - 40",
                "FG": "1.008 - 1.014",
                "SRM": "4.5 - 7",
                "ABV": "7.5 - 9.5%",
                "name": "18C. Belgian Tripel"
            },
            {
                "OG": "1.070 - 1.095",
                "IBUs": "22 - 35",
                "FG": "1.005 - 1.016",
                "SRM": "3 - 6",
                "ABV": "7.5 - 10.5%",
                "name": "18D. Belgian Golden Strong Ale"
            },
            {
                "OG": "1.075 - 1.110",
                "IBUs": "20 - 35",
                "FG": "1.010 - 1.024",
                "SRM": "12 - 22",
                "ABV": "8 - 11%",
                "name": "18E. Belgian Dark Strong Ale"
            }
        ],
        "id": "Category 18"
    },
    "Strong Ale": {
        "data": [
            {
                "OG": "1.060 - 1.090",
                "IBUs": "30 - 60",
                "FG": "1.015 - 1.022",
                "SRM": "10 - 22",
                "ABV": "6 - 9%",
                "name": "19A. Old Ale"
            },
            {
                "OG": "1.080 - 1.120",
                "IBUs": "35 - 70",
                "FG": "1.018 - 1.030",
                "SRM": "8 - 22",
                "ABV": "8 - 12%",
                "name": "19B. English Barleywine"
            },
            {
                "OG": "1.080 - 1.120",
                "IBUs": "50 - 120",
                "FG": "1.016 - 1.030",
                "SRM": "10 - 19",
                "ABV": "8 - 12%",
                "name": "19C. American Barleywine"
            }
        ],
        "id": "Category 19"
    },
    "Fruit Beer": {
        "data": [
            {
                "OG": "Varies with base style",
                "IBUs": "Varies with base style",
                "FG": "Varies with base style",
                "SRM": "Varies with base style",
                "ABV": "Varies with base style",
                "name": "20. Fruit Beer"
            }
        ],
        "id": "Category 20"
    },
    "Spice/Herb/Vegetable Beer": {
        "data": [
            {
                "OG": "Varies with base style",
                "IBUs": "Varies with base style",
                "FG": "Varies with base style",
                "SRM": "Varies with base style",
                "ABV": "Varies with base style",
                "name": "21A. Spice, Herb, or Vegetable Beer"
            },
            {
                "OG": "Varies with base style",
                "IBUs": "Varies with base style",
                "FG": "Varies with base style",
                "SRM": "Varies with base style. Usually somewhat dark.",
                "ABV": "Varies with base style. Generally above 6%.",
                "name": "21B. Christmas/Winter Specialty Spiced Beer"
            }
        ],
        "id": "Category 21"
    },
    "Smoke-Flavored/Wood-Aged Beer": {
        "data": [
            {
                "OG": "1.050 - 1.057",
                "IBUs": "20 - 30",
                "FG": "1.012 - 1.016",
                "SRM": "12 - 22",
                "ABV": "4.8 - 6%",
                "name": "22A. Classic Rauchbier"
            },
            {
                "OG": "Varies with base style",
                "IBUs": "Varies with base style",
                "FG": "Varies with base style",
                "SRM": "Varies with base style",
                "ABV": "Varies with base style",
                "name": "22B. Other Smoked Beer"
            },
            {
                "OG": "Varies with base style. Typically above average",
                "IBUs": "Varies with base style",
                "FG": "Varies with base style",
                "SRM": "Varies with base style",
                "ABV": "Varies with base style. Typically above average",
                "name": "22C. Wood-Aged Beer"
            }
        ],
        "id": "Category 22"
    },
    "Specialty Beer": {
        "data": [
            {
                "OG": "Varies with base style",
                "IBUs": "Varies with base style",
                "FG": "Varies with base style",
                "SRM": "Varies with base style",
                "ABV": "Varies with base style",
                "name": "23. Specialty Beer"
            }
        ],
        "id": "Category 23"
    },
    "Standard Cider and Perry": {
        "data": [
            {
                "OG": "1.050 - 1.075",
                "FG": "0.995 - 1.010",
                "ABV": "5 - 8%",
                "name": "27A. Common Cider"
            },
            {
                "ABV": "3 - 6%",
                "OG": "1.050 - 1.060",
                "FG": "1.010 - 1.020",
                "name": "27B. English Cider"
            },
            {
                "FG": "1.000 - 1.020",
                "ABV": "5 - 9%",
                "OG": "1.050 - 1.070",
                "name": "27C. French Cider"
            }
        ],
        "id": "Category 27"
    },
    "Specialty Cider and Perry": {
        "data": [
            {
                "OG": "1.045 - 1.070",
                "FG": "0.995 - 1.010",
                "ABV": "7 - 13%",
                "name": "28A. New England Cider"
            },
            {
                "ABV": "9 - 12%",
                "OG": "1.045 - 1.100",
                "FG": "0.995 - 1.010",
                "name": "28B. Fruit Cider"
            }
        ],
        "id": "Category 28"
    }
}

export default beerData;
