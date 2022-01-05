
import pickle

model = pickle.load(open('finalized_model.pkl', 'rb'))



# final_features = [[cities,development,gender,experience,university,education,major,experience_year,company_size,company_type,job,training]]
final_features = [[4,0.25,1,1,1,1,1,1,1,1,1,4]]
prediction = model.predict_proba(final_features)
print(prediction)

final_features = [[50,0.75,1,1,1,1,1,1,1,1,1,104]]
prediction = model.predict_proba(final_features)
print(prediction)

final_features = [[90,0.50,1,1,1,1,1,2,1,1,1,54]]
prediction = model.predict_proba(final_features)
print(prediction)

