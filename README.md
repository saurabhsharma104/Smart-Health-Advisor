# Disease-Prediction-using-Symptoms

## Getting Started

First, run the backend server:

## Step 1
```
pip install -r requirements.txt
```
## After Installing start django server
```
python manage.py runserver
```

## Backend server run on local machine on http://127.0.0.1:8000/ this port
## For prediction we have make API end point 



# <span style="color:red">Note :-</span> 
## if you run backend on different port then change base_url in frontend file located at  ```/lib/urls.ts``` this file  


``` base_url = `http://127.0.0.1:your_port_number/`  ``` 




## Make request from frontend on this port 


Second, run the frontend server on your local machine 


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
