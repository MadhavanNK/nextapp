
# 📘 Employee Attrition Analysis & Prediction  

A complete end-to-end **Machine Learning + HR Analytics** project to analyze, visualize, and predict employee attrition using Python and Streamlit.  
This project combines **data science**, **business intelligence**, and **human resource analytics** to help organizations understand and reduce employee turnover.

---

## 🚀 Project Overview  

Employee attrition (turnover) impacts business continuity, productivity, and costs.  
This project builds a **predictive model** that identifies employees at risk of leaving, enabling HR teams to take proactive retention measures.

The solution includes:
- A detailed **Jupyter Notebook (`employee.ipynb`)** for analysis, modeling, and training.  
- An interactive **Streamlit app (`emp.py`)** for visualization and real-time prediction.  
- A comprehensive report covering approach, results, and insights.

---

## 🎯 Project Objectives  

- Analyze employee demographic and job-related factors contributing to attrition.  
- Build and evaluate ML models to predict employee turnover.  
- Provide actionable insights via visual dashboards.  
- Deploy the predictive model using Streamlit for HR decision-making.  

---

## 🧠 Problem Statement  

Organizations need to **predict which employees are likely to leave** to:
- Improve retention strategies  
- Reduce hiring and training costs  
- Enhance work-life balance initiatives  

This project addresses that by building a **classification model** that predicts attrition probability based on employee features.

---

## 🧩 Dataset Details  

**Dataset:** Employee Attrition Dataset  
**Rows:** 1470  
**Columns:** 35  

### Key Features:
| Category | Features |
|-----------|-----------|
| Demographics | Age, Gender, MaritalStatus |
| Job Info | Department, JobRole, JobLevel |
| Compensation | MonthlyIncome, StockOptionLevel |
| Satisfaction | JobSatisfaction, EnvironmentSatisfaction, WorkLifeBalance |
| Tenure | YearsAtCompany, YearsInCurrentRole, YearsWithCurrManager |
| Target | Attrition (Yes/No → 1/0) |

---

## 🧼 Data Preprocessing (employee.ipynb)  

### 🧹 Steps Performed:
- Removed irrelevant columns  
- Converted target `Attrition` → 1 (Yes), 0 (No)  
- Checked duplicates and missing values  
- Applied **Ordinal Encoding** to ordered columns  
- Applied **One-Hot Encoding** to categorical columns  
- Combined all encodings using `ColumnTransformer`  
- Scaled numerical features using `StandardScaler`  

### 🧾 Files Saved:
- `preprocessor.pkl` → Encoders  
- `scaler.pkl` → Scaler  
- `lr_scaled_model.pkl` → Final Model  
- `cleaned_data.csv`  
- `cleaned_data_with_target.csv`

---

## 📊 Exploratory Data Analysis (EDA)

### 🔍 Visuals & Findings:
1. **Correlation Heatmap** – Identified relationships between satisfaction, overtime, and attrition.  
2. **Job Satisfaction vs Attrition** – Lower satisfaction = higher attrition.  
3. **Age vs Attrition** – Younger employees show higher turnover.  
4. **Monthly Income vs Attrition** – Lower income groups are more likely to leave.  
5. **Overtime Impact** – Employees doing overtime frequently are more likely to quit.  
6. **Departmental Attrition** – Sales & Lab Technicians have higher attrition rates.  

---

## 🤖 Model Development  

### Models Trained:
| Model | Description | Result |
|--------|--------------|---------|
| Linear Regression | Baseline | Poor classifier |
| Logistic Regression (scaled) | Final model | ✅ Best accuracy & interpretability |
| Random Forest | Overfitted slightly | Good performance |
| AdaBoost | Moderate accuracy | Slower |
| Gradient Boosting | Moderate | Stable |

### Final Model:
**Scaled Logistic Regression**  
Chosen for its:
- High accuracy and AUC  
- Balanced precision/recall  
- Simplicity and interpretability  

---

## 📈 Model Evaluation  

| Metric | Description | Result |
|--------|--------------|--------|
| Accuracy | Overall correct predictions | ~85% |
| Precision | Correctly identified leavers | High |
| Recall | Found most true leavers | Good |
| F1-Score | Balance of precision & recall | Strong |
| AUC-ROC | Model discrimination | Excellent (>0.85) |

### Visualization:
- Confusion Matrix  
- ROC Curve  
- AUC Score  

---

## 💾 Saved Model Artifacts  

| File | Description |
|------|--------------|
| `lr_scaled_model.pkl` | Final trained logistic regression model |
| `preprocessor.pkl` | Fitted ColumnTransformer |
| `scaler.pkl` | Fitted StandardScaler |
| `cleaned_data_with_target.csv` | Processed dataset for visualization |

---

## 🖥 Streamlit App (emp.py)

### Pages:
#### 🏠 Home Dashboard
- Displays dataset overview  
- Highlights high-risk employees  
- Shows top satisfaction metrics  
- Visual comparison charts  

#### 🔮 Prediction Page
- Interactive employee input form  
- Predicts attrition probability in real-time  
- Displays:
  - “✅ Likely to Stay”  
  - “🚨 Likely to Leave”  
  - Probability percentage  

### Run the App:
```
streamlit run emp.py
```

---

## ⚙️ Installation & Usage  

### 1️⃣ Install Dependencies:
```
pip install -r requirements.txt
```

### 2️⃣ Run Jupyter Notebook:
```
jupyter notebook employee.ipynb
```

### 3️⃣ Launch Streamlit App:
```
streamlit run emp.py
```

---

## 📂 Project Structure  

```
├── employee.ipynb
├── emp.py
├── Employee-Attrition.csv
├── cleaned_data.csv
├── cleaned_data_with_target.csv
├── preprocessor.pkl
├── scaler.pkl
├── lr_scaled_model.pkl
├── README.md
└── requirements.txt
```

---

## 🧮 Key Insights

### 🔹 Factors Increasing Attrition:
- Overtime work  
- Low satisfaction levels  
- Fewer years at company  
- Low salary band  
- Younger employees  

### 🔹 Factors Reducing Attrition:
- Strong work-life balance  
- Higher job involvement  
- Experienced employees  
- Managerial/leadership positions  

---

## 💼 Business Impact

| Objective | Impact |
|------------|--------|
| Employee Retention | Identify high-risk employees early |
| Cost Reduction | Lower recruitment/training expenses |
| Workforce Planning | Data-backed retention decisions |
| HR Strategy | Focused employee engagement initiatives |

---

## 📊 Results Summary

✅ Predictive Model Accuracy: **~85%**  
✅ Identified Key Attrition Drivers  
✅ Real-time Streamlit App for HR Use  
✅ Clear Business Insights from Data  

---

## 🔮 Future Enhancements  

- Integrate **SHAP/LIME** for explainable AI  
- Deploy app on **Streamlit Cloud / AWS / Azure**  
- Add **HR strategy recommendations** based on insights  
- Build **interactive dashboards** using Power BI or Tableau  
- Incorporate **live employee data** via database connection  

---

## 📝 Conclusion  

This project demonstrates how **data-driven HR analytics** can empower organizations to understand and reduce employee turnover.  
Through advanced EDA, predictive modeling, and visualization, HR departments can take **proactive actions** to retain top talent and enhance workforce stability.


