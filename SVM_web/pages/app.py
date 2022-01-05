#!C:\Users\ASUS\AppData\Local\Programs\Python\Python39\python.exe
#replace above with your python installation path

print('content-type:text/html')
print() #end the header
import cgi
import pickle

form = cgi.FieldStorage()

model = pickle.load(open('model.pkl', 'rb'))

city =int(form.getvalue('city'))
development=float(form.getvalue('development'))
gender=int(form.getvalue('gender'))
experience=int(form.getvalue('experience'))
university=int(form.getvalue('university'))
education=int(form.getvalue('education'))
major=int(form.getvalue('major'))
experience_year=int(form.getvalue('experience_year'))
company_size=int(form.getvalue('company_size'))
company_type=int(form.getvalue('company_type'))
job=int(form.getvalue('job'))
training=int(form.getvalue('training'))


final_features = [[city,development,gender,experience,university,education,major,experience_year,company_size,company_type,job,training]]
# final_features = [[75,0.25,2,2,2,2,2,2,2,1,2,2]]
prediction = model.predict_proba(final_features)[:1]
print(round(prediction[0][0]*100))


