from flask import Flask,request,render_template,jsonify
import subprocess,webbrowser,json
import re

app = Flask(__name__)

def getdisk(path):
    disk = re.match("(.*:)", path).groups()[0]
    return disk

def getpath():
    with open("path.json","r",encoding="utf-8")as f:
        path = json.load(f)["path"]

        return path


@app.route('/')
def index():

    return render_template('index.html')

@app.route('/api',methods=['GET','POST'])
def api():
    try:
        path = getpath()
        rpath = "\"" + path + "\""
        data = request.json
        do = data["do"]

        if do == "start":
            cmd = r"{} && cd {}".format(getdisk(path), rpath)
            subcmd = cmd + " && start nginx.exe"
            print(subcmd)
            r = subprocess.run(subcmd,shell=True)
            return jsonify({"code":r.returncode})

        elif do == "restart":
            cmd = r"{} && cd {}".format(getdisk(path), rpath)
            subcmd = cmd + " && "+ "nginx.exe -s reload"
            r = subprocess.run(subcmd,shell=True)
            return jsonify({"code":r.returncode})

        elif do == "stop":
            cmd = r"{} && cd {}".format(getdisk(path), rpath)
            subcmd = cmd + " && "+ "nginx.exe -s quit"
            r = subprocess.run(subcmd,shell=True)
            return jsonify({"code":r.returncode})

        elif do == "conf":
            request_path = request.json["path"]
            with open('path.json','w',encoding='utf-8')as f:
                json.dump({"path" : request_path },f)
                f.close()
            return "配置路径:overwritten"

    except Exception as e:
        print(e.args)
        return 'error'

if __name__ == '__main__':
    webbrowser.open("http://localhost:5000")
    app.run()
