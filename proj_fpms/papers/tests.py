
#testing api for admin approval_status

import requests

response = requests.get('http://127.0.0.1:8000/adminviewpapers/')
print(response)