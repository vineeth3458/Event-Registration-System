 # Event-Registration-System 
🎟️ AWS Event Registration System  A serverless event registration system built using **AWS S3, Lambda, API Gateway, DynamoDB, and SES**.   Users can register via a web form, have their data stored in DynamoDB, and receive an email confirmation.   An admin endpoint allows viewing all registrations.

🚀 Features

- **User Registration Form** – Simple HTML form to collect name and email.
- **Serverless Backend** – AWS Lambda handles form submissions.
- **Data Storage** – DynamoDB stores all registrations.
- **Email Notifications** – AWS SES sends confirmation emails.
- **Admin Access** – API endpoint to list all registrations.
- **Static Hosting** – Optional S3 hosting for frontend.

- 🛠️ Tech Stack

- **Frontend**: HTML, JavaScript (hosted on S3 or locally)
- **Backend**: AWS Lambda (Node.js)
- **Database**: AWS DynamoDB
- **Email Service**: AWS SES
- **API**: AWS API Gateway
- **Hosting**: Amazon S3 (optional)

- ⚙️ Setup & Deployment

### 1️⃣ Create DynamoDB Table
- Table Name: `EventRegistrations`
- Primary Key: `email` (String)

### 2️⃣ Configure SES
- Verify an email in **AWS SES**.
- (Optional) Request **Production Access** to send to unverified emails.

### 3️⃣ Create Lambda Functions
- **EventRegistrationHandler** (POST `/register`)
- **AdminListHandler** (GET `/admin`)

- 4️⃣ Set Up API Gateway
- Create API → Add `/register` POST → Integrate with EventRegistrationHandler.
- Create `/admin` GET → Integrate with AdminListHandler.
- Deploy API (stage name: `prod`).

### 5️⃣ Frontend Hosting
- Option A: Test locally.
- Option B: Upload `index.html` to an S3 bucket → Enable static website hosting.

---

## 🧪 Testing

1. Open the form in a browser.
2. Fill in name & email → Click Register.
3. Check **DynamoDB** → New entry should be added.
4. Check your email → Should receive confirmation.
5. Admin: Access `/admin` endpoint to see all registrations.

---

## 🔒 Security Notes

- Use IAM roles for secure Lambda/DynamoDB/SES access.
- Restrict admin endpoint with API keys or authentication.
- Enable CORS only for trusted domains.

---

## 📈 Future Improvements

- ✅ Add CAPTCHA to prevent spam.
- ✅ Add authentication for the admin route.
- ✅ Add CSV export for registrations.
- ✅ Add more event fields (phone, event type, etc.).
- ✅ Add logging & error handling.

---

## 👤 Author

Created by **[Your Name]** – AWS Serverless Demo Project.  
Feel free to fork & improve! 🚀

---
