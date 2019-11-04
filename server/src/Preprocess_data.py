import json

class preprocess:
    def __init__(self):
        self.Outdata = {}
    def Event_page_data(self, Indata):
        self.Outdata["id"] = Indata["id"]
        self.Outdata["title"] = Indata["title"]
        self.Outdata["venue_id"] = Indata["venue"]["id"]
        self.Outdata["description"] = Indata["description"]
        self.Outdata["image"] = Indata["performers"][0]["image"] or "/static/media/demoimg.3cffd639.jpg"
        self.Outdata["datetime_local"] = Indata["datetime_local"].replace('T','  ')
        self.Outdata["description"] = Indata["description"] or "None provided by Host"
        self.Outdata["full_address"] = Indata["venue"]["address"] + Indata["venue"]["extended_address"]

        if len(Indata["performers"]) == 1:
            for key,value in Indata["performers"][0].items():
                if key in ["id","name"]:
                    if "performers_"+key+"s" in self.Outdata.keys():
                        self.Outdata["performers_"+key+"s"] = self.Outdata["performers_"+key+"s"] + ' , ' + str(value)
                    else:
                        self.Outdata["performers_"+key+"s"] = str(value)
        else:
            for i in Indata["performers"]:
                for key,value in i.items():
                    if key in ["id","name"]:
                        if "performers_"+key+"s" in self.Outdata.keys():
                            self.Outdata["performers_"+key+"s"] = self.Outdata["performers_"+key+"s"] + ' , ' + str(value)
                        else:
                            self.Outdata["performers_"+key+"s"] = str(value)
        
        Outdata = json.dumps(self.Outdata)
        return Outdata